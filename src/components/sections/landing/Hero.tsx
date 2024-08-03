import { Title, Text, Button, Container } from "@mantine/core";

export default function Hero() {
  return (
    <Container className="relative sm:pt-32 sm:pb-20 pt-20 pb-16" size={1400}>
      <div className="relative z-10">
        <Title className="text-center font-extrabold text-4xl tracking-tight">
          The only marketplace exclusively for{" "}
          <Text component="span" color="#ceb888" inherit>
            Purdue
          </Text>{" "}
          students
        </Title>

        <Container className="p-0" size={600}>
          <Text
            c="dimmed"
            className="xs:text-center xs:text-base text-left text-lg"
          >
            Basically FB Marketplace. Built by Purdue students for Purdue
            students.
          </Text>
        </Container>

        <div
          className="mt-5 flex xs:flex-row justify-center flex-col \
              xs:space-x-4 space-y-4 xs:space-y-0"
        >
          <Button
            size="lg"
            variant="default"
            color="gray"
            className="text-base \
          xs:text-lg"
          >
            Log in
          </Button>
          <Button size="lg" className="text-base xs:text-lg">
            Sign up
          </Button>
        </div>
      </div>
    </Container>
  );
}
