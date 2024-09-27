import { VStack, Divider, ScrollView } from "native-base"
import { Botao } from "@/src/components/Botao"
import {CardConsulta} from "@/src/components/CardConsulta"
import {Titulo} from "@/src/components/Titulo"
import { NativeBaseProvider, StatusBar } from 'native-base';

export default function Consultas(){
    return(
      <NativeBaseProvider>
      <ScrollView p="5">
        <Titulo color="blue.500">Minhas consultas</Titulo>
        <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
  
        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAgendado
        />
  
        <Divider mt={5} />
  
        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAtendido
        />
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAtendido
        />
        <CardConsulta 
          nome='Dr. Leça'
          especialidade='Cardiologista'
          foto='https://github.com/vlecabr.png'
          data='20/04/2023'
          foiAtendido
        />
      </ScrollView>
      </NativeBaseProvider>
    )
  }