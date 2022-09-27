import unittest # import unittest from python
import calculator
from calculator import Calculator # import the calculator module which has the functions we are testing


class TestsCalculator(unittest.TestCase):
    def test_add_functionality(self):
        calc1 = Calculator(10, 20)
        result = calc1.calc_add()
        self.assertEqual(result, 30)
        
    def test_add_functionality_with_one_negative_number(self):
        calc1 = Calculator(10, -30)
        result = calc1.calc_add()
        self.assertEqual(result, -20)