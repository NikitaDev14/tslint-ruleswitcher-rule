import * as Lint from "tslint";
import * as ts from "typescript";
import { Rule as NoConsoleRule } from "tslint/lib/rules/noConsoleRule";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "import statement forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    // const ruleNameToRun: string = this.getOptions().ruleArguments[0]['rule-name'];
    // const ruleToRun: Lint.RuleConstructor = Lint.findRule(ruleNameToRun);
    //
    // const ruleFailures: Lint.RuleFailure[] = new ruleToRun({
    //   ruleArguments: [true, 'log'],
    //   ruleName: ruleToRun.metadata.ruleName,
    //   ruleSeverity: 'error',
    //   disabledIntervals: [],
    // }).apply(sourceFile);

    const ruleFailures = new (Function.bind.call(NoConsoleRule, {
      ruleArguments: [true],
        ruleName: 'no-console',
        ruleSeverity: 'error',
        disabledIntervals: [],
    }));

    console.log(ruleFailures);

    return ruleFailures.apply(sourceFile);
  }
}
