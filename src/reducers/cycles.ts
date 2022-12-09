/* eslint-disable */

export interface Cycle {
    id: string
    task: string
    amountOfMinutes: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

export interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string
}

export const cyclesReducer = (state: CyclesState, action: any) => {
    switch (action.type) {
        case 'addNewCycle':
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }

        case 'markAsFinished':
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, finishedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }

        case 'interruptCycle':
            return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, interruptedDate: new Date() }
                    } else {
                        return cycle
                    }
                }),
                activeCycleId: null,
            }

        default:
            return state
    }
}
