export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },
    "longest-substring-without-repeating-characters": {
        id: "longest-substring-without-repeating-characters",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window",
        description: {
            text: "Given a string s, find the length of the longest substring without repeating characters.",
            notes: ["A substring is a contiguous sequence of characters within a string."],
        },
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: 'The answer is "abc", with the length of 3.',
            },
            {
                input: 's = "bbbbb"',
                output: "1",
                explanation: 'The answer is "b", with the length of 1.',
            },
            {
                input: 's = "pwwkew"',
                output: "3",
                explanation:
                    'The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.',
            },
        ],
        constraints: [
            "0 ≤ s.length ≤ 5 * 10⁴",
            "s consists of English letters, digits, symbols and spaces.",
        ],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
            python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
            java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
        },
        expectedOutput: {
            javascript: "3\n1\n3",
            python: "3\n1\n3",
            java: "3\n1\n3",
        },
    },
    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "String • Stack",
        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: [
                "Open brackets must be closed by the same type of brackets.",
                "Open brackets must be closed in the correct order.",
                "Every close bracket has a corresponding open bracket of the same type.",
            ],
        },
        examples: [
            { input: 's = "()"', output: "true" },
            { input: 's = "()[]{}"', output: "true" },
            { input: 's = "(]"', output: "false" },
            { input: 's = "([])"', output: "true" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'."],
        starterCode: {
            javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([])")); // Expected: true`,
            python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("([])"))  # Expected: True`,
            java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("([])")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse\ntrue",
            python: "True\nTrue\nFalse\nTrue",
            java: "true\ntrue\nfalse\ntrue",
        },
    },
    "valid-triangles": {
        id: "valid-triangles",
        title: "Valid Triangles",
        difficulty: "Easy",
        category: "Basic Logic • Geometry",
        description: {
            text: "Given the three angles of a triangle, determine if it forms a valid triangle. A triangle is considered valid if the sum of its three angles is exactly 180 degrees.",
            notes: ["All angles must be greater than 0."],
        },
        examples: [
            { input: "60 60 60", output: "YES" },
            { input: "30 40 110", output: "YES" },
            { input: "45 45 45", output: "NO" },
        ],
        constraints: ["0 ≤ angle ≤ 180"],
        starterCode: {
            javascript: `function isValidTriangle(a, b, c) {
  // Write your solution here
  
}

// Test cases
console.log(isValidTriangle(60, 60, 60)); // Expected: YES
console.log(isValidTriangle(30, 40, 110)); // Expected: YES
console.log(isValidTriangle(45, 45, 45)); // Expected: NO`,
            python: `def isValidTriangle(a, b, c):
    # Write your solution here
    pass

# Test cases
print(isValidTriangle(60, 60, 60))  # Expected: YES
print(isValidTriangle(30, 40, 110))  # Expected: YES
print(isValidTriangle(45, 45, 45))  # Expected: NO`,
            java: `import java.util.*;

class Solution {
    public static String isValidTriangle(int a, int b, int c) {
        // Write your solution here
        
        return "NO";
    }
    
    public static void main(String[] args) {
        System.out.println(isValidTriangle(60, 60, 60)); // Expected: YES
        System.out.println(isValidTriangle(30, 40, 110)); // Expected: YES
        System.out.println(isValidTriangle(45, 45, 45)); // Expected: NO
    }
}`,
        },
        expectedOutput: {
            javascript: "YES\nYES\nNO",
            python: "YES\nYES\nNO",
            java: "YES\nYES\nNO",
        },
    },
    "search-rotated-sorted-array": {
        id: "search-rotated-sorted-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Array • Binary Search",
        description: {
            text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            notes: ["You must write an algorithm with O(log n) runtime complexity."],
        },
        examples: [
            { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
            { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
            { input: "nums = [1], target = 0", output: "-1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i], target ≤ 10⁴", "All values are unique"],
        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,
            python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))  # Expected: -1`,
            java: `import java.util.*;

class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
        System.out.println(search(new int[]{1}, 0)); // Expected: -1
    }
}`,
        },
        expectedOutput: {
            javascript: "4\n-1\n-1",
            python: "4\n-1\n-1",
            java: "4\n-1\n-1",
        },
    },
    "merge-k-sorted-lists": {
        id: "merge-k-sorted-lists",
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        category: "Linked List • Priority Queue • Divide & Conquer",
        description: {
            text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
            notes: ["A list node consists of 'val' and 'next' properties."],
        },
        examples: [
            { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
            { input: "lists = []", output: "[]" },
            { input: "lists = [[]]", output: "[]" },
        ],
        constraints: ["0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500", "-10⁴ ≤ lists[i][j] ≤ 10⁴"],
        starterCode: {
            javascript: `// Hint: Using a flat array represention for this simplified version
function mergeKLists(lists) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(mergeKLists([[1,4,5],[1,3,4],[2,6]]))); // Expected: [1,1,2,3,4,4,5,6]
console.log(JSON.stringify(mergeKLists([]))); // Expected: []`,
            python: `import json

def mergeKLists(lists):
    # Write your solution here
    pass

# Test cases
print(json.dumps(mergeKLists([[1,4,5],[1,3,4],[2,6]])))  # Expected: [1,1,2,3,4,4,5,6]
print(json.dumps(mergeKLists([])))  # Expected: []`,
            java: `import java.util.*;

class Solution {
    public static List<Integer> mergeKLists(List<List<Integer>> lists) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(mergeKLists(Arrays.asList(
            Arrays.asList(1,4,5),
            Arrays.asList(1,3,4),
            Arrays.asList(2,6)
        ))); // Expected: [1, 1, 2, 3, 4, 4, 5, 6]
        System.out.println(mergeKLists(new ArrayList<>())); // Expected: []
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4,5,6]\n[]",
            python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]",
            java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]",
        },
    },
    "trapping-rain-water": {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        category: "Array • Two Pointers • Monotonic Stack",
        description: {
            text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            notes: ["Visualise the bars as a landscape."],
        },
        examples: [
            { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
            { input: "height = [4,2,0,3,2,5]", output: "9" },
        ],
        constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
            python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,
            java: `import java.util.*;

class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,
        },
        expectedOutput: {
            javascript: "6\n9",
            python: "6\n9",
            java: "6\n9",
        },
    },
    "three-sum": {
        id: "three-sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
            notes: ["The solution set must not contain duplicate triplets."],
        },
        examples: [
            { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
            { input: "nums = [0,1,1]", output: "[]" },
            { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
        ],
        constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]).sort())); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1]))); // Expected: []`,
            python: `import json
def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(json.dumps(sorted(threeSum([-1,0,1,2,-1,-4]))))  # Expected: [[-1, -1, 2], [-1, 0, 1]]
print(json.dumps(threeSum([0,1,1])))  # Expected: []`,
            java: `import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]\n[]",
            python: "[[-1, -1, 2], [-1, 0, 1]]\n[]",
            java: "[[-1, -1, 2], [-1, 0, 1]]\n[]",
        },
    },
    "buy-sell-stock": {
        id: "buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Sliding Window",
        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
            notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
        },
        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." },
            { input: "prices = [7,6,4,3,1]", output: "0" },
        ],
        constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
            python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
            java: `class Solution {
    public int maxProfit(int[] prices) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0",
        },
    },
    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Dynamic Programming • Math",
        description: {
            text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            notes: [],
        },
        examples: [
            { input: "n = 2", output: "2", explanation: "1. 1 step + 1 step, 2. 2 steps" },
            { input: "n = 3", output: "3" },
        ],
        constraints: ["1 ≤ n ≤ 45"],
        starterCode: {
            javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
            python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
            java: `class Solution {
    public int climbStairs(int n) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\n3",
            python: "2\n3",
            java: "2\n3",
        },
    },
    "reverse-linked-list": {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
            notes: ["A node has 'val' and 'next' properties."],
        },
        examples: [
            { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
            { input: "head = [1,2]", output: "[2,1]" },
            { input: "head = []", output: "[]" },
        ],
        constraints: ["Number of nodes is in range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
        starterCode: {
            javascript: `// Using array representation for simplicity in tests
function reverseList(arr) {
  return arr.reverse();
}

console.log(JSON.stringify(reverseList([1,2,3,4,5]))); // Expected: [5,4,3,2,1]`,
            python: `def reverseList(arr):
    return arr[::-1]

print(reverseList([1,2,3,4,5]))  # Expected: [5,4,3,2,1]`,
            java: `import java.util.*;
class Solution {
    public List<Integer> reverseList(List<Integer> list) {
        Collections.reverse(list);
        return list;
    }
}`,
        },
        expectedOutput: {
            javascript: "[5,4,3,2,1]",
            python: "[5, 4, 3, 2, 1]",
            java: "[5, 4, 3, 2, 1]",
        },
    },
    "coin-change": {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
        category: "Dynamic Programming • BFS",
        description: {
            text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
            notes: ["Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1."],
        },
        examples: [
            { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
            { input: "coins = [2], amount = 3", output: "-1" },
            { input: "coins = [1], amount = 0", output: "0" },
        ],
        constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
        starterCode: {
            javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1`,
            python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1`,
            java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        return -1;
    }
}`,
        },
        expectedOutput: {
            javascript: "3\n-1",
            python: "3\n-1",
            java: "3\n-1",
        },
    },
    "product-except-self": {
        id: "product-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix Sum",
        description: {
            text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
            notes: ["The algorithm must run in O(n) time and without using the division operation."],
        },
        examples: [
            { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
            { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
        ],
        constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
        starterCode: {
            javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(productExceptSelf([1,2,3,4]))); // Expected: [24,12,8,6]`,
            python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4])) # Expected: [24,12,8,6]`,
            java: `import java.util.*;
class Solution {
    public int[] productExceptSelf(int[] nums) {
        return new int[nums.length];
    }
}`,
        },
        expectedOutput: {
            javascript: "[24,12,8,6]",
            python: "[24, 12, 8, 6]",
            java: "[24, 12, 8, 6]",
        },
    },
    "group-anagrams": {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        category: "String • Hashing",
        description: {
            text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
            notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase."],
        },
        examples: [
            { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
        ],
        constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
        starterCode: {
            javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test case (simplified output check)
const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result.length); // Expected: 3 groups`,
            python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test case
print(len(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))) # Expected: 3`,
            java: `import java.util.*;
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },
    "longest-palindrome": {
        id: "longest-palindrome",
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        category: "String • Dynamic Programming",
        description: {
            text: "Given a string s, return the longest palindromic substring in s.",
            notes: [],
        },
        examples: [
            { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
            { input: 's = "cbbd"', output: '"bb"' },
        ],
        constraints: ["1 ≤ s.length ≤ 1000", "s consists of only digits and English letters"],
        starterCode: {
            javascript: `function longestPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"`,
            python: `def longestPalindrome(s):
    # Write your solution here
    pass

print(longestPalindrome("babad"))`,
            java: `class Solution {
    public String longestPalindrome(String s) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "bab",
            python: "bab",
            java: "bab",
        },
    },
    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hashing",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: [],
        },
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" },
        ],
        constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters"],
        starterCode: {
            javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
            python: `def isAnagram(s, t):
    # Write your solution here
    pass

print(isAnagram("anagram", "nagaram")) # Expected: True`,
            java: `class Solution {
    public boolean isAnagram(String s, String t) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse",
        },
    },
    "merge-two-lists": {
        id: "merge-two-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List • Recursion",
        description: {
            text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.",
            notes: ["Return the head of the merged linked list."],
        },
        examples: [
            { input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
        ],
        constraints: ["Number of nodes in both lists is in range [0, 50]", "-100 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function mergeTwoLists(l1, l2) {
  // Simplified array version
  return [...l1, ...l2].sort((a,b) => a-b);
}

console.log(JSON.stringify(mergeTwoLists([1,2,4], [1,3,4])));`,
            python: `def mergeTwoLists(l1, l2):
    return sorted(l1 + l2)

print(mergeTwoLists([1,2,4], [1,3,4]))`,
            java: `import java.util.*;
class Solution {
    public List<Integer> mergeTwoLists(List<Integer> l1, List<Integer> l2) {
        List<Integer> res = new ArrayList<>(l1);
        res.addAll(l2);
        Collections.sort(res);
        return res;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]",
            python: "[1, 1, 2, 3, 4, 4]",
            java: "[1, 1, 2, 3, 4, 4]",
        },
    },
    "linked-list-cycle": {
        id: "linked-list-cycle",
        title: "Linked List Cycle",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
            notes: ["Return true if there is a cycle, false otherwise."],
        },
        examples: [
            { input: "head = [3,2,0,-4], pos = 1", output: "true" },
            { input: "head = [1,2], pos = -1", output: "false" },
        ],
        constraints: ["Number of nodes is in range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function hasCycle(head) {
  // Write your solution here
  
}

console.log(hasCycle([3,2,0,-4])); // Expected: false (without cycle setup)`,
            python: `def hasCycle(head):
    pass`,
            java: `class Solution {
    public boolean hasCycle(ListNode head) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "false",
            python: "False",
            java: "false",
        },
    },
    "binary-tree-inorder": {
        id: "binary-tree-inorder",
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        category: "Tree • DFS • Stack",
        description: {
            text: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
            notes: [],
        },
        examples: [
            { input: "root = [1,null,2,3]", output: "[1,3,2]" },
        ],
        constraints: ["Number of nodes is in range [0, 100]", "-100 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function inorderTraversal(root) {
  // Write your solution here
  
}

console.log(JSON.stringify(inorderTraversal([1,null,2,3])));`,
            python: `def inorderTraversal(root):
    pass`,
            java: `import java.util.*;
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[]",
            python: "[]",
            java: "[]",
        },
    },
    "max-depth-binary-tree": {
        id: "max-depth-binary-tree",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS • BFS",
        description: {
            text: "Given the root of a binary tree, return its maximum depth.",
            notes: ["A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node."],
        },
        examples: [
            { input: "root = [3,9,20,null,null,15,7]", output: "3" },
        ],
        constraints: ["Number of nodes is in range [0, 10⁴]", "-100 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function maxDepth(root) {
  // Write your solution here
  
}

console.log(maxDepth([3,9,20,null,null,15,7]));`,
            python: `def maxDepth(root):
    pass`,
            java: `class Solution {
    public int maxDepth(TreeNode root) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "0",
            python: "0",
            java: "0",
        },
    },
    "invert-binary-tree": {
        id: "invert-binary-tree",
        title: "Invert Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS • BFS",
        description: {
            text: "Given the root of a binary tree, invert the tree, and return its root.",
            notes: [],
        },
        examples: [
            { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
        ],
        constraints: ["Number of nodes is in range [0, 100]", "-100 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function invertTree(root) {
  // Write your solution here
  
}

console.log(JSON.stringify(invertTree([4,2,7,1,3,6,9])));`,
            python: `def invertTree(root):
    pass`,
            java: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        return root;
    }
}`,
        },
        expectedOutput: {
            javascript: "null",
            python: "None",
            java: "null",
        },
    },
    "same-tree": {
        id: "same-tree",
        title: "Same Tree",
        difficulty: "Easy",
        category: "Tree • DFS • Recursion",
        description: {
            text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
            notes: ["Two binary trees are considered the same if they are structurally identical, and the nodes have the same value."],
        },
        examples: [
            { input: "p = [1,2,3], q = [1,2,3]", output: "true" },
            { input: "p = [1,2], q = [1,null,2]", output: "false" },
        ],
        constraints: ["Number of nodes in range [0, 100]", "-10⁴ ≤ Node.val ≤ 10⁴"],
        starterCode: {
            javascript: `function isSameTree(p, q) {
  // Write your solution here
  
}

console.log(isSameTree([1,2,3], [1,2,3])); // Expected: true`,
            python: `def isSameTree(p, q):
    pass`,
            java: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true",
            python: "True",
            java: "true",
        },
    },
};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
};