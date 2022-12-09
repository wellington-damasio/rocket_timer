import { differenceInSeconds } from 'date-fns/esm'
import {
  useState,
  createContext,
  ReactNode,
  useReducer,
  useEffect,
} from 'react'
import {
  addNewCycleAction,
  interruptCycleAction,
  markCycleAsFinishedAction,
} from '../reducers/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles'

interface CreateCycleData {
  task: string
  amountOfMinutes: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountOfSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
//     () => {
//       const storedStateAsJSON = localStorage.getItem(
//         '@ignite-timer:cycles-state-1.0.0',
//       )

//       if (storedStateAsJSON) {
//         return JSON.parse(storedStateAsJSON)
//       }
//     },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  const [amountOfSecondsPassed, setAmountOfSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

//   useEffect(() => {
//     const stateJSON = JSON.stringify(cyclesState)

//     localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
//   }, [cyclesState])

  const markCurrentCycleAsFinished = () => {
    const newCycles = cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, finishedDate: new Date() }
      } else {
        return cycle
      }
    })

    dispatch(markCycleAsFinishedAction(newCycles))
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountOfSecondsPassed(seconds)
  }

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      amountOfMinutes: data.amountOfMinutes,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountOfSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCycleAction(activeCycleId))
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountOfSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
