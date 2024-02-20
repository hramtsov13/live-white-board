"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Organization from "./organization";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((member) => (
        <Organization
          key={member.organization.id}
          id={member.organization.id}
          name={member.organization.name}
          imageUrl={member.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default List;
