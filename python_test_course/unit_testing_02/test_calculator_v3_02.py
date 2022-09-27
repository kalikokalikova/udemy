import unittest
from calculator_v3 import Calculator

class TestsCalculatorBase(unittest.TestCase):
    """
    Tests the functionality of the calculator class
    """
    def add_using_two_positive_numbers(self):
        print("adding 2 positive numbers")
        """
        Test case to test add functionality with two positive numbers
        """
        calc = Calculator(10,20)
        result = calc.calc_add()
        self.assertEqual(result, 30)

    def test_add_using_one_negative_number(self):
        print("Adding 2 other numbers")
        """
        Test case to test add functionality with one positive number and one negative number
        """
        calc = Calculator(10, -20)
        result = calc.calc_add()
        self.assertEqual(result, -10)