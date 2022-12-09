/* eslint-disable */
import { CyclesState } from "./cycles"
import { Cycle } from "./cycles"

export const addNewCycleAction = (newCycle: Cycle) => {
    return {
        type: 'addNewCycle',
        payload: {
            newCycle,
        },
    }
}

export const interruptCycleAction = (activeCycleId: string) => {
    return {
        type: 'interruptCycle',
        payload: {
            activeCycleId,
        },
    }
}

export const markCycleAsFinishedAction = (newCycles: Cycle[]) => {
    return {
        type: 'markAsFinished',
        payload: {
            newCycles,
        },
    }
}
