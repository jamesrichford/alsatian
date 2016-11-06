import { FunctionSpy } from "../_spying";
import { FunctionSpyCallCountMatcher, SpyCallCountType } from "./";

export class FunctionSpyMatcher {

   private _spy: FunctionSpy;

   public constructor(spy: FunctionSpy, expectedArguments?: Array<any>) {
      if (spy === null || spy === undefined) {
         throw new TypeError("spy must not be null or undefined.");
      }

      this._spy = spy;
   }

   public exactly(expectedCallCount: number): FunctionSpyCallCountMatcher {

      if (expectedCallCount < 1) {
         throw new TypeError("expectedCallCount must be greater than 0.");
      }

      return new FunctionSpyCallCountMatcher(this._spy, expectedCallCount, SpyCallCountType.Exactly, true);
   }

   public anythingBut(unexpectedCallCount: number): FunctionSpyCallCountMatcher {

      if (unexpectedCallCount < 1) {
         throw new TypeError("unexpectedCallCount must be greater than 0.");
      }

      return new FunctionSpyCallCountMatcher(this._spy, unexpectedCallCount, SpyCallCountType.Exactly, false);
   }

   public greaterThan(minimumCallCount: number): FunctionSpyCallCountMatcher {

      if (minimumCallCount < 1) {
         throw new TypeError("minimumCallCount must be greater than 0.");
      }

      return new FunctionSpyCallCountMatcher(this._spy, minimumCallCount, SpyCallCountType.GreaterThan, true);
   }

   public lessThan(maximumCallCount: number): FunctionSpyCallCountMatcher {

      if (maximumCallCount < 1) {
         throw new TypeError("maximumCallCount must be greater than 0.");
      }

      return new FunctionSpyCallCountMatcher(this._spy, maximumCallCount, SpyCallCountType.LessThan, true);
   }
}