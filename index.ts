import {
  TestContainer,
  StartedTestContainer,
  StoppedTestContainer,
  GenericContainer,
} from "testcontainers";

const main = async () => {
  const container: TestContainer = new GenericContainer("alpine");
  const startedContainer: StartedTestContainer = await container.start();
  const stoppedContainer: StoppedTestContainer = await startedContainer.stop();
};

main();
