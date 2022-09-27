# Creating a Test Suite

# 1. Import unittest and the required modules

import unittest
import test_calculator_v3_02 # these are the test cases


# 2. Create an instance of the TestLoader
loader = unittest.TestLoader()

# 3. Create an instance of the TestSuite
suite = unittest.TestSuite()

# 4. Add Test Cases to the TestSuite instance

# >> Load test cases from a module
suite.addTests(loader.loadTestsFromModule(test_calculator_v3_02))
# suite.addTests(loader.loadTestsFromModule(test_calculator_v3_01)) Add more modules if you want
# >> Load test cases from a class
suite.addTests(loader.loadTestsFromTestCase(test_calculator_v3_02.TestsCalculatorBase))

# 5. Create an instance of the TextTestRunner
runner = unittest.TextTestRunner(verbosity=2)

# 6. Run the TextTestRunner instance
# You can capture the results of runner.run(suite)
test_results = runner.run(suite)

total_ran = test_results.testsRun
total_skipped = len(test_results.skipped)
total_errors = len(test_results.errors)
total_fails = len(test_results.failures)

print("Total ran        :", total_ran)
print("Total skipped    :", total_skipped)
print("Total errors     :", total_errors)
print("Total fails      :", total_fails)



