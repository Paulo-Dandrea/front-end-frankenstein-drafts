import { csv } from 'd3'
import { useEffect, useState } from 'react'
import { Box, Flex } from '~/ui/components/utils'

// import {} from 'react-'

const URL =
  'https://gist.githubusercontent.com/Paulo-Dandrea/6c3fa927a051228bf517a6832a6ddbe5/raw/fe36110916029998486a2e314db495fb1f3a6313/cssNamedColors.csv'

interface Color {
  Especificação: string
  'Palavra-chave': string
  'valores hex RGB': string
}

export const Colors = () => {
  const [data, setData] = useState<Color[]>([])

  useEffect(() => {
    csv(URL).then(data => {
      console.log(data)

      setData(data)
    })
  }, [])

  if (!data) return <pre>Loading...</pre>

  return (
    <Flex flexWrap="wrap">
      {data.map(d => {
        return (
          <Box
            key={d['Palavra-chave']}
            backgroundColor={d['valores hex RGB']}
            width={'50px'}
            height={'50px'}
            // backgroundColor={'#ff00ff'}
          >
              {/* {d['Palavra-chave']} */}
          </Box>
        )
      })}
    </Flex>
  )
}
