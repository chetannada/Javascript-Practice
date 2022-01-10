// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 27: Testing hackerrank solution in python
// def minimum_index(seq):
//     if len(seq) == 0:
//         raise ValueError("Cannot get the minimum value index from an empty sequence")
//     min_idx = 0
//     for i in range(1, len(seq)):
//         if seq[i] < seq[min_idx]:
//             min_idx = i
//     return min_idx
// class TestDataEmptyArray(object):
    
//     @staticmethod
//     def get_array():
//         return list()

// class TestDataUniqueValues(object):

//     @staticmethod
//     def get_array():
//         return [7,9,1,2,-7,10,22]

//     @staticmethod
//     def get_expected_result():
//         return 4

// class TestDataExactlyTwoDifferentMinimums(object):

//     @staticmethod
//     def get_array():
//         return [7,9,1,2,-7,10,22,-7]

//     @staticmethod
//     def get_expected_result():
//         return 4