import { AboutMe } from "#about/components/AboutMe";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <AboutMe>
        <Button onClick={() => navigate("/apps")}>See some mini-apps</Button>
      </AboutMe>
    </>
  );
}
