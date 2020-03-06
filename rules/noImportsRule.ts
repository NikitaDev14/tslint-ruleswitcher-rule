import * as Lint from "tslint";
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "import statement forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    const ruleNameToRun: string = this.getOptions().ruleArguments[0]['rule-name'];
    const ruleToRun: Lint.RuleConstructor = Lint.findRule(ruleNameToRun);

    const ruleFailures: Lint.RuleFailure[] = new ruleToRun({
      ruleArguments: [true, 'log'],
      ruleName: ruleToRun.metadata.ruleName,
      ruleSeverity: 'error',
      disabledIntervals: [],
    }).apply(sourceFile);

    console.log(ruleToRun.metadata.optionsDescription);

    return ruleFailures;
  }
}
