import React , { useEffect, useState } from "react";
import ListWaypoints from "../../../components/list/Waypoints";
import { getAllWaypoints } from "../../../network";

export default function ListWaypointsCtrl({navigation}) {
  const [waypoints, setWaypoints] = useState([]);

  useEffect(() => {
    queryWaypoints();
  }, []);

  const showDetail = (waypoint) => {
    navigation.navigate("Waypoint Detail", waypoint);
  };

  const queryWaypoints = async () => {
    const result = await getAllWaypoints();
    if (result.error) return console.log("Error fetching plants");
    setWaypoints(result);
  };

  
  return <ListWaypoints waypoints={waypoints} showDetail={showDetail} />;
}
