const ports = [
  {
    name: "Poti, GE",
    availableRoutes: ["Shanghai, CN", "Singapore, SG"],
  },
  {
    name: "Batumi, GE",
    availableRoutes: ["Shanghai, CN"],
  },
  {
    name: "Shanghai, CN",
    availableRoutes: ["Poti, GE", "Batumi, GE", "Singapore, SG"],
  },
  {
    name: "Singapore, SG",
    availableRoutes: ["Poti, GE", "Shanghai, CN"],
  },
];

const getAvailableRoutes = (portName) => {
  const port = ports.find((p) => p.name === portName);
  return port ? port.availableRoutes : [];
}

export { getAvailableRoutes };
export default ports;
