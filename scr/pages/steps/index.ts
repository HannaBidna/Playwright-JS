import { LoginSteps } from "../steps/login"
import { SomeSteps } from "../steps/some-steps"
import { applyMixins } from "../helpers/utils";

class Steps {};

interface Steps extends LoginSteps, SomeSteps {}

applyMixins(Steps, [LoginSteps, SomeSteps]);

export { Steps };