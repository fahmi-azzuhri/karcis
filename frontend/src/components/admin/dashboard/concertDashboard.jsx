import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ViewConcertDashboard from "../../../views/admin/dashboard/concertDashboard";
function ConcertDashboard() {
  const {
    data: concerts,
    isFetching,
    isPending,
    error,
  } = useQuery({
    queryKey: ["concert"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/concerts`)
        .then((res) => res.data),
  });

  if (isFetching || isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching concerts : {error.message}</div>;
  }
  return <ViewConcertDashboard concerts={concerts} />;
}

export default ConcertDashboard;
