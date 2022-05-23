import {useState} from 'react'
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Header } from "../components/Header";
import dynamic from 'next/dynamic'
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,

  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime' as const,
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000z',
      '2021-03-19T00:00:00.000z',
      '2021-03-20T00:00:00.000z',
      '2021-03-21T00:00:00.000z',
      '2021-03-22T00:00:00.000z',
      '2021-03-23T00:00:00.000z',
      '2021-03-24:00:00.000z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}
const series = [
  {
    name: 'series1', data: [31, 120, 10, 28, 51, 18, 109]
  }
]

export default function Dashboard(){
  const [showChart, setShowChart] = useState<boolean>(false);

  setTimeout(() => {
    setShowChart(true);
  }, 1);


  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth="1480px" mx="auto" px="6">
      <Sidebar />

      <SimpleGrid flex="1" gap="4" minChildWidth="320px"> {/* flexStart talvez */}
        <Box p={["6", "8"]} bg="gray.800" borderRadius="8" pb="4">
          <Text fontSize="large" mb="4">
            Inscritos da semana 
          </Text>
          {showChart && <Chart type="area" height="160" options={options} series={series} />}
        </Box>
        <Box p="8" bg="gray.800" borderRadius="8" pb="4">
          <Text fontSize="large" mb="4">
            Taxa de abertura
          </Text>
          {showChart && <Chart type="area" height="160" options={options} series={series} />}
        </Box>
      </SimpleGrid>
      </Flex>
    </Flex>
  )
}