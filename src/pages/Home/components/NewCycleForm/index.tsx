import { FormContainer, TaskInput, AmountOfMinutesInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-list"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-list">
        <option value="Criar um novo projeto React" />
        <option value="Estudar Node.js" />
        <option value="Treinar perna" />
      </datalist>

      <label htmlFor="amountOfMinutes">durante</label>
      <AmountOfMinutesInput
        type="number"
        id="amountOfMinutes"
        placeholder="00"
        // step="5"
        min="1"
        max="60"
        disabled={!!activeCycle}
        {...register('amountOfMinutes', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
