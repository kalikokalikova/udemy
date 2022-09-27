# Handling exceptions
# Negative testing where you're making sure that the code is throwing an error because that's the correct thing to do in this situatino
import unittest
from calculator_v3 import Calculator

class TestsCalculatorAddFunctionality(unittest.TestCase):
    
    def test_add_two_positive_numbers(self):
        calc = Calculator(10,20)
        result = calc.calc_add()
        self.assertEqual(result, 30)

    # These inputs should throw an error
    def test_add_one_number_and_one_string_a(self):
        calc = Calculator(10,"bad_string")
        result = calc.calc_add()
        self.assertEqual(result, 30)

    def test_add_one_number_and_one_string_b(self):
        calc = Calculator(10,"bad_string")
        with self.assertRaises(TypeError):
            result = calc.calc_add()
            self.assertEqual(result, 30)