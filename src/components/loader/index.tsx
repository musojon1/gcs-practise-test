import { memo } from "react";
import { Card, CircularProgress } from "@mui/material";

const Loader = memo(({ className }: { className?: string }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "none",
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <CircularProgress color="success" className={className} />
    </Card>
  );
});

export default Loader;
