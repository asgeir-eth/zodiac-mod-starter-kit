import "hardhat-deploy"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const deploy: DeployFunction = async function ({ deployments, getNamedAccounts }: HardhatRuntimeEnvironment) {
  console.log("Deploying 'external' dependencies")
  // const { deploy } = deployments
  const button = await deployments.get("Button")

  const mockSafe = await deployments.get("MockSafe")
}

deploy.tags = ["module"]
deploy.dependencies = ["dependencies"]

export default deploy
