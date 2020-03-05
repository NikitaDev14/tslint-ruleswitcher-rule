import * as Lint from "tslint";
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "import statement forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    console.log(sourceFile.fileName, 'current file');
    console.log(this.getOptions(), 'options');

    return this.applyWithWalker(
      new NoImportsWalker(sourceFile, this.getOptions()),
    );
  }
}

// The walker takes care of all the work.
class NoImportsWalker extends Lint.RuleWalker {
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    this.addFailureAtNode(node, Rule.FAILURE_STRING);

    super.visitImportDeclaration(node);
  }
}
