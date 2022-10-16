import { Image } from "react-bootstrap";
import { IStaff } from "../model"

interface StaffCardProps {
  member: IStaff
}

const StaffCard = ({ member }: StaffCardProps) => {
  return (
    <div style={{ width: '20em' }}>
      <Image src={member.portrait.toString()} alt={`Portrait of ${member.name}`} style={{ width: '100%', maxWidth: 250, maxHeight: 333.75, height: '50vh', objectFit: 'cover', margin: '1em 0px' }} />
      <h5 style={{ color: 'black', lineHeight: '0px' }}>{member.name}</h5>
      <p style={{ color: '#707070', fontStyle: 'italic' }}>{member.positions.join(', ')}</p>
    </div>
  );
}

export default StaffCard;