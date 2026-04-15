import { Member } from '@/types';
import React, { useEffect, useState } from 'react'
import MemberCard from '../memberCard/memberCard';

const AboutUsBoard = () => {
      const [members, setMembers] = useState<Member[]>([]);

      useEffect(() => {
        fetch("/api/members")
          .then((res) => res.json())
          .then((json) => setMembers(json.data as Member[]));
      }, []);
  return (
    <>
      <div className="aboutUsBoardSection">
        <div className="aboutUsBoardContainer wrapper">
          <h2>ОДБОР НА МАЧР</h2>
          <div className="memberCardDiv">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                company={member.company}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsBoard