import { useCounter } from './store/counter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FunctionComponent } from 'react'
import { ActionIcon, Box, Container, Text } from '@mantine/core'

const queryClient = new QueryClient()

const App: FunctionComponent = () => {
  const { value, increment, decrement } = useCounter()
  return (
    <QueryClientProvider client={queryClient}>
      <Text size="lg" align="center">
        Hello from react
      </Text>
      <Container>
        <Box
          sx={theme => ({
            display: 'flex',
            gap: theme.spacing.sm,
          })}
        >
          <ActionIcon variant="outline" onClick={decrement}>
            -
          </ActionIcon>
          <Text>{value}</Text>
          <ActionIcon variant="outline" onClick={increment}>
            +
          </ActionIcon>
        </Box>
      </Container>
    </QueryClientProvider>
  )
}

export default App
