import Image from 'next/image'
import { EmployeeData } from '@/data/employeeData'
import { CrewBox, CrewTitle, EmployeeCard, EmployeeContent, EmployeeDataBox, EmployeeName, EmployeePhoto } from './Crew.styled'

export default function Crew() {
  return (
    <>
      <CrewTitle>Наша команда</CrewTitle>
      <CrewBox>
        {EmployeeData.map((el) => (
          <EmployeeCard key={el.id}>
            <EmployeePhoto>
              <Image 
                src={el.photo} 
                alt={`${el.name}` + ' фото'}
                fill={true} 
                quality={100}
              />
            </EmployeePhoto>
            <EmployeeDataBox>
              <EmployeeName>{el.name}</EmployeeName>
              <hr />
              <EmployeeContent>{el.role}</EmployeeContent>
              <EmployeeContent>{el.experience}</EmployeeContent>
            </EmployeeDataBox>
          </EmployeeCard>
        ))}
      </CrewBox>
    </>
  )
}