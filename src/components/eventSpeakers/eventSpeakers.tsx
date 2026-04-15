import React, { useEffect, useState } from "react";
import MemberCard from "../memberCard/memberCard";
import { Member } from "@/types";

const EventSpeakers = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((json) => setMembers(json.data as Member[]));
  }, []);

  return (
    <>
      <div className="eventSpeakersSection">
        <div className="eventSpeakersContainer wrapper">
          <div className="eventSpeakersLeftDiv">
            <h2>Говорници на настанот:</h2>
          </div>
          <div className="eventSpeakersRightDiv">
            {members.slice(0, 3).map((member) => (
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
};

export default EventSpeakers;
