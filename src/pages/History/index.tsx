import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, StatusContainer } from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              .map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.amountOfMinutes}min</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    {cycle.finishedDate ? (
                      <StatusContainer statusColor="green">
                        Concluído
                      </StatusContainer>
                    ) : cycle.interruptedDate ? (
                      <StatusContainer statusColor="red">
                        Interrompido
                      </StatusContainer>
                    ) : (
                      <StatusContainer statusColor="yellow">
                        Em andamento
                      </StatusContainer>
                    )}
                  </tr>
                )
              })
              .reverse()}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
