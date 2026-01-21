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
        isPremium: false,
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
    "longest-common-prefix": {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        category: "String",
        description: {
            text: "Write a function to find the longest common prefix string amongst an array of strings.",
            notes: ["If there is no common prefix, return an empty string \"\"."],
        },
        examples: [
            { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
            { input: 'strs = ["dog","racecar","car"]', output: '""' },
        ],
        constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of only lowercase English letters."],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Expected: ""`,
            python: `def longestCommonPrefix(strs):
    pass

print(longestCommonPrefix(["flower","flow","flight"])) # Expected: "fl"
print(longestCommonPrefix(["dog","racecar","car"])) # Expected: ""`,
            java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "fl\n",
            python: "fl\n",
            java: "fl\n",
        },
    },
    "palindrome-number": {
        id: "palindrome-number",
        title: "Palindrome Number",
        difficulty: "Easy",
        category: "Math",
        description: {
            text: "Given an integer x, return true if x is a palindrome, and false otherwise.",
            notes: ["An integer is a palindrome when it reads the same backward as forward."],
        },
        examples: [
            { input: "x = 121", output: "true" },
            { input: "x = -121", output: "false" },
            { input: "x = 10", output: "false" },
        ],
        constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function isPalindrome(x) {
  // Write your solution here
  
}

console.log(isPalindrome(121)); // Expected: true
console.log(isPalindrome(-121)); // Expected: false
console.log(isPalindrome(10)); // Expected: false`,
            python: `def isPalindrome(x):
    pass

print(isPalindrome(121)) # Expected: True
print(isPalindrome(-121)) # Expected: False
print(isPalindrome(10)) # Expected: False`,
            java: `class Solution {
    public boolean isPalindrome(int x) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\nfalse",
            python: "True\nFalse\nFalse",
            java: "true\nfalse\nfalse",
        },
    },
    "roman-to-integer": {
        id: "roman-to-integer",
        title: "Roman to Integer",
        difficulty: "Easy",
        category: "Math • String",
        description: {
            text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
            notes: ["Given a roman numeral, convert it to an integer."],
        },
        examples: [
            { input: 's = "III"', output: "3" },
            { input: 's = "LVIII"', output: "58" },
            { input: 's = "MCMXCIV"', output: "1994" },
        ],
        constraints: ["1 ≤ s.length ≤ 15", "s contains only characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')."],
        starterCode: {
            javascript: `function romanToInt(s) {
  // Write your solution here
  
}

console.log(romanToInt("III")); // Expected: 3
console.log(romanToInt("LVIII")); // Expected: 58
console.log(romanToInt("MCMXCIV")); // Expected: 1994`,
            python: `def romanToInt(s):
    pass

print(romanToInt("III")) # Expected: 3
print(romanToInt("LVIII")) # Expected: 58
print(romanToInt("MCMXCIV")) # Expected: 1994`,
            java: `class Solution {
    public int romanToInt(String s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3\n58\n1994",
            python: "3\n58\n1994",
            java: "3\n58\n1994",
        },
    },
    "remove-duplicates-sorted-array": {
        id: "remove-duplicates-sorted-array",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.",
            notes: ["Return the number of unique elements in nums."],
        },
        examples: [
            { input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" },
            { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5, nums = [0,1,2,3,4,_,_,_,_,_]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-100 ≤ nums[i] ≤ 100", "nums is sorted in non-decreasing order."],
        starterCode: {
            javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}

let nums1 = [1,1,2];
console.log(removeDuplicates(nums1), nums1.slice(0, 2)); // Expected: 2 [1, 2]
let nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2), nums2.slice(0, 5)); // Expected: 5 [0, 1, 2, 3, 4]`,
            python: `def removeDuplicates(nums):
    pass

nums1 = [1,1,2]
print(removeDuplicates(nums1), nums1[:2]) # Expected: 2 [1, 2]
nums2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(nums2), nums2[:5]) # Expected: 5 [0, 1, 2, 3, 4]`,
            java: `class Solution {
    public int removeDuplicates(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2 [ 1, 2 ]\n5 [ 0, 1, 2, 3, 4 ]",
            python: "2 [1, 2]\n5 [0, 1, 2, 3, 4]",
            java: "2 [1, 2]\n5 [0, 1, 2, 3, 4]",
        },
    },
    "remove-element": {
        id: "remove-element",
        title: "Remove Element",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
            notes: [],
        },
        examples: [
            { input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" },
        ],
        constraints: ["0 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 50", "0 ≤ val ≤ 100"],
        starterCode: {
            javascript: `function removeElement(nums, val) {
  // Write your solution here
  
}

let nums = [3,2,2,3];
console.log(removeElement(nums, 3), nums.slice(0, 2).sort()); // Expected: 2 [2, 2]`,
            python: `def removeElement(nums, val):
    pass

nums = [3,2,2,3]
print(removeElement(nums, 3), sorted(nums[:2])) # Expected: 2 [2, 2]`,
            java: `class Solution {
    public int removeElement(int[] nums, int val) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2 [ 2, 2 ]",
            python: "2 [2, 2]",
            java: "2 [2, 2]",
        },
    },
    "plus-one": {
        id: "plus-one",
        title: "Plus One",
        difficulty: "Easy",
        category: "Array • Math",
        description: {
            text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.",
            notes: ["Increment the large integer by one and return the resulting array of digits."],
        },
        examples: [
            { input: "digits = [1,2,3]", output: "[1,2,4]" },
            { input: "digits = [4,3,2,1]", output: "[4,3,2,2]" },
            { input: "digits = [9]", output: "[1,0]" },
        ],
        constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9", "digits does not contain leading 0's."],
        starterCode: {
            javascript: `function plusOne(digits) {
  // Write your solution here
  
}

console.log(JSON.stringify(plusOne([1,2,3]))); // Expected: [1,2,4]
console.log(JSON.stringify(plusOne([4,3,2,1]))); // Expected: [4,3,2,2]
console.log(JSON.stringify(plusOne([9]))); // Expected: [1,0]`,
            python: `import json
def plusOne(digits):
    pass

print(json.dumps(plusOne([1,2,3]))) # Expected: [1,2,4]
print(json.dumps(plusOne([4,3,2,1]))) # Expected: [4,3,2,2]
print(json.dumps(plusOne([9]))) # Expected: [1,0]`,
            java: `class Solution {
    public int[] plusOne(int[] digits) {
        return digits;
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
            python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
            java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
        },
    },
    "add-binary": {
        id: "add-binary",
        title: "Add Binary",
        difficulty: "Easy",
        category: "Math • String",
        description: {
            text: "Given two binary strings a and b, return their sum as a binary string.",
            notes: [],
        },
        examples: [
            { input: 'a = "11", b = "1"', output: '"100"' },
            { input: 'a = "1010", b = "1011"', output: '"10101"' },
        ],
        constraints: ["1 ≤ a.length, b.length ≤ 10⁴", "a and b consist only of '0' or '1' characters.", "Each string does not contain leading zeros except for the string \"0\" itself."],
        starterCode: {
            javascript: `function addBinary(a, b) {
  // Write your solution here
  
}

console.log(addBinary("11", "1")); // Expected: "100"
console.log(addBinary("1010", "1011")); // Expected: "10101"`,
            python: `def addBinary(a, b):
    pass

print(addBinary("11", "1")) # Expected: "100"
print(addBinary("1010", "1011")) # Expected: "10101"`,
            java: `class Solution {
    public String addBinary(String a, String b) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "100\n10101",
            python: "100\n10101",
            java: "100\n10101",
        },
    },
    "sqrtx": {
        id: "sqrtx",
        title: "Sqrt(x)",
        difficulty: "Easy",
        category: "Math • Binary Search",
        description: {
            text: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
            notes: ["You must not use any built-in exponent function or operator."],
        },
        examples: [
            { input: "x = 4", output: "2" },
            { input: "x = 8", output: "2" },
        ],
        constraints: ["0 ≤ x ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function mySqrt(x) {
  // Write your solution here
  
}

console.log(mySqrt(4)); // Expected: 2
console.log(mySqrt(8)); // Expected: 2`,
            python: `def mySqrt(x):
    pass

print(mySqrt(4)) # Expected: 2
print(mySqrt(8)) # Expected: 2`,
            java: `class Solution {
    public int mySqrt(int x) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\n2",
            python: "2\n2",
            java: "2\n2",
        },
    },
    "single-number": {
        id: "single-number",
        title: "Single Number",
        difficulty: "Easy",
        category: "Array • Bit Manipulation",
        description: {
            text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
            notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
        },
        examples: [
            { input: "nums = [2,2,1]", output: "1" },
            { input: "nums = [4,1,2,1,2]", output: "4" },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴", "Each element in the array appears twice except for one element which appears only once."],
        starterCode: {
            javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4`,
            python: `def singleNumber(nums):
    pass

print(singleNumber([2,2,1])) # Expected: 1
print(singleNumber([4,1,2,1,2])) # Expected: 4`,
            java: `class Solution {
    public int singleNumber(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n4",
            python: "1\n4",
            java: "1\n4",
        },
    },
    "majority-element": {
        id: "majority-element",
        title: "Majority Element",
        difficulty: "Easy",
        category: "Array • Hash Table • Divide and Conquer • Sorting • Counting",
        description: {
            text: "Given an array nums of size n, return the majority element.",
            notes: ["The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array."],
        },
        examples: [
            { input: "nums = [3,2,3]", output: "3" },
            { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
            python: `def majorityElement(nums):
    pass

print(majorityElement([3,2,3])) # Expected: 3
print(majorityElement([2,2,1,1,1,2,2])) # Expected: 2`,
            java: `class Solution {
    public int majorityElement(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3\n2",
            python: "3\n2",
            java: "3\n2",
        },
    },
    "excel-sheet-column-number": {
        id: "excel-sheet-column-number",
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        category: "Math • String",
        description: {
            text: "Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.",
            notes: ["A -> 1, B -> 2, C -> 3, ..., Z -> 26, AA -> 27, AB -> 28, ..."],
        },
        examples: [
            { input: 'columnTitle = "A"', output: "1" },
            { input: 'columnTitle = "AB"', output: "28" },
            { input: 'columnTitle = "ZY"', output: "701" },
        ],
        constraints: ["1 ≤ columnTitle.length ≤ 7", "columnTitle consists only of uppercase English letters."],
        starterCode: {
            javascript: `function titleToNumber(columnTitle) {
  // Write your solution here
  
}

console.log(titleToNumber("A")); // Expected: 1
console.log(titleToNumber("AB")); // Expected: 28
console.log(titleToNumber("ZY")); // Expected: 701`,
            python: `def titleToNumber(columnTitle):
    pass

print(titleToNumber("A")) # Expected: 1
print(titleToNumber("AB")) # Expected: 28
print(titleToNumber("ZY")) # Expected: 701`,
            java: `class Solution {
    public int titleToNumber(String columnTitle) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n28\n701",
            python: "1\n28\n701",
            java: "1\n28\n701",
        },
    },
    "happy-number": {
        id: "happy-number",
        title: "Happy Number",
        difficulty: "Easy",
        category: "Math • Hash Table • Two Pointers",
        description: {
            text: "Write an algorithm to determine if a number n is happy.",
            notes: [
                "A happy number is a number defined by the following process:",
                "Starting with any positive integer, replace the number by the sum of the squares of its digits.",
                "Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.",
                "Those numbers for which this process ends in 1 are happy.",
                "Return true if n is a happy number, and false if not.",
            ],
        },
        examples: [
            { input: "n = 19", output: "true" },
            { input: "n = 2", output: "false" },
        ],
        constraints: ["1 ≤ n ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function isHappy(n) {
  // Write your solution here
  
}

console.log(isHappy(19)); // Expected: true
console.log(isHappy(2)); // Expected: false`,
            python: `def isHappy(n):
    pass

print(isHappy(19)) # Expected: True
print(isHappy(2)) # Expected: False`,
            java: `class Solution {
    public boolean isHappy(int n) {
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
    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Table • Sorting",
        description: {
            text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            notes: [],
        },
        examples: [
            { input: "nums = [1,2,3,1]", output: "true" },
            { input: "nums = [1,2,3,4]", output: "false" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
        starterCode: {
            javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
            python: `def containsDuplicate(nums):
    pass

print(containsDuplicate([1,2,3,1])) # Expected: True
print(containsDuplicate([1,2,3,4])) # Expected: False`,
            java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
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
    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "Hash Table • String • Sorting",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
        },
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" },
        ],
        constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters."],
        starterCode: {
            javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
            python: `def isAnagram(s, t):
    pass

print(isAnagram("anagram", "nagaram")) # Expected: True
print(isAnagram("rat", "car")) # Expected: False`,
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
    "missing-number": {
        id: "missing-number",
        title: "Missing Number",
        difficulty: "Easy",
        category: "Array • Hash Table • Math • Binary Search • Bit Manipulation",
        description: {
            text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
            notes: ["Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?"],
        },
        examples: [
            { input: "nums = [3,0,1]", output: "2" },
            { input: "nums = [0,1]", output: "2" },
            { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴", "0 ≤ nums[i] ≤ n", "All the numbers of nums are unique."],
        starterCode: {
            javascript: `function missingNumber(nums) {
  // Write your solution here
  
}

console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
            python: `def missingNumber(nums):
    pass

print(missingNumber([3,0,1])) # Expected: 2
print(missingNumber([0,1])) # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1])) # Expected: 8`,
            java: `class Solution {
    public int missingNumber(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\n2\n8",
            python: "2\n2\n8",
            java: "2\n2\n8",
        },
    },
    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
            notes: ["Note that you must do this in-place without making a copy of the array."],
        },
        examples: [
            { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
            { input: "nums = [0]", output: "[0]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

let n1 = [0,1,0,3,12];
moveZeroes(n1);
console.log(JSON.stringify(n1)); // Expected: [1,3,12,0,0]`,
            python: `import json
def moveZeroes(nums):
    pass

n1 = [0,1,0,3,12]
moveZeroes(n1)
print(json.dumps(n1)) # Expected: [1, 3, 12, 0, 0]`,
            java: `class Solution {
    public void moveZeroes(int[] nums) {
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]",
            python: "[1, 3, 12, 0, 0]",
            java: "[1, 3, 12, 0, 0]",
        },
    },
    "intersection-of-two-arrays-ii": {
        id: "intersection-of-two-arrays-ii",
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        category: "Array • Hash Table • Two Pointers • Binary Search • Sorting",
        description: {
            text: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
            notes: [],
        },
        examples: [
            { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2,2]" },
            { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" },
        ],
        constraints: ["1 ≤ nums1.length, nums2.length ≤ 1000", "0 ≤ nums1[i], nums2[i] ≤ 1000"],
        starterCode: {
            javascript: `function intersect(nums1, nums2) {
  // Write your solution here
  
}

console.log(JSON.stringify(intersect([1,2,2,1], [2,2]).sort())); // Expected: [2,2]
console.log(JSON.stringify(intersect([4,9,5], [9,4,9,8,4]).sort())); // Expected: [4,9]`,
            python: `import json
def intersect(nums1, nums2):
    pass

print(json.dumps(sorted(intersect([1,2,2,1], [2,2])))) # Expected: [2, 2]
print(json.dumps(sorted(intersect([4,9,5], [9,4,9,8,4])))) # Expected: [4, 9]`,
            java: `class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,2]\n[4,9]",
            python: "[2, 2]\n[4, 9]",
            java: "[2, 2]\n[4, 9]",
        },
    },
    "first-unique-character-in-a-string": {
        id: "first-unique-character-in-a-string",
        title: "First Unique Character in a String",
        difficulty: "Easy",
        category: "Hash Table • String • Queue • Counting",
        description: {
            text: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
            notes: [],
        },
        examples: [
            { input: 's = "leetcode"', output: "0" },
            { input: 's = "loveleetcode"', output: "2" },
            { input: 's = "aabb"', output: "-1" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s consists of only lowercase English letters."],
        starterCode: {
            javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}

console.log(firstUniqChar("leetcode")); // Expected: 0
console.log(firstUniqChar("loveleetcode")); // Expected: 2
console.log(firstUniqChar("aabb")); // Expected: -1`,
            python: `def firstUniqChar(s):
    pass

print(firstUniqChar("leetcode")) # Expected: 0
print(firstUniqChar("loveleetcode")) # Expected: 2
print(firstUniqChar("aabb")) # Expected: -1`,
            java: `class Solution {
    public int firstUniqChar(String s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "0\n2\n-1",
            python: "0\n2\n-1",
            java: "0\n2\n-1",
        },
    },
    "fizz-buzz": {
        id: "fizz-buzz",
        title: "Fizz Buzz",
        difficulty: "Easy",
        category: "Math • String • Simulation",
        description: {
            text: "Given an integer n, return a string array answer (1-indexed) where:",
            notes: [
                "answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.",
                "answer[i] == \"Fizz\" if i is divisible by 3.",
                "answer[i] == \"Buzz\" if i is divisible by 5.",
                "answer[i] == i (as a string) if none of the above conditions are true.",
            ],
        },
        examples: [
            { input: "n = 3", output: '["1","2","Fizz"]' },
            { input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' },
        ],
        constraints: ["1 ≤ n ≤ 10⁴"],
        starterCode: {
            javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}

console.log(JSON.stringify(fizzBuzz(3))); // Expected: ["1","2","Fizz"]
console.log(JSON.stringify(fizzBuzz(5))); // Expected: ["1","2","Fizz","4","Buzz"]`,
            python: `import json
def fizzBuzz(n):
    pass

print(json.dumps(fizzBuzz(3))) # Expected: ["1", "2", "Fizz"]
print(json.dumps(fizzBuzz(5))) # Expected: ["1", "2", "Fizz", "4", "Buzz"]`,
            java: `class Solution {
    public List<String> fizzBuzz(int n) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: '["1","2","Fizz"]\n["1","2","Fizz","4","Buzz"]',
            python: '["1", "2", "Fizz"]\n["1", "2", "Fizz", "4", "Buzz"]',
            java: '["1", "2", "Fizz"]\n["1", "2", "Fizz", "4", "Buzz"]',
        },
    },
    "third-maximum-number": {
        id: "third-maximum-number",
        title: "Third Maximum Number",
        difficulty: "Easy",
        category: "Array • Sorting",
        description: {
            text: "Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.",
            notes: [],
        },
        examples: [
            { input: "nums = [3,2,1]", output: "1" },
            { input: "nums = [1,2]", output: "2" },
            { input: "nums = [2,2,3,1]", output: "1" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function thirdMax(nums) {
  // Write your solution here
  
}

console.log(thirdMax([3,2,1])); // Expected: 1
console.log(thirdMax([1,2])); // Expected: 2
console.log(thirdMax([2,2,3,1])); // Expected: 1`,
            python: `def thirdMax(nums):
    pass

print(thirdMax([3,2,1])) # Expected: 1
print(thirdMax([1,2])) # Expected: 2
print(thirdMax([2,2,3,1])) # Expected: 1`,
            java: `class Solution {
    public int thirdMax(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n2\n1",
            python: "1\n2\n1",
            java: "1\n2\n1",
        },
    },
    "find-all-numbers-disappeared-in-an-array": {
        id: "find-all-numbers-disappeared-in-an-array",
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.",
            notes: ["Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space."],
        },
        examples: [
            { input: "nums = [4,3,2,7,8,2,3,1]", output: "[5,6]" },
            { input: "nums = [1,1]", output: "[2]" },
        ],
        constraints: ["n == nums.length", "1 ≤ n ≤ 10⁵", "1 ≤ nums[i] ≤ n"],
        starterCode: {
            javascript: `function findDisappearedNumbers(nums) {
  // Write your solution here
  
}

console.log(JSON.stringify(findDisappearedNumbers([4,3,2,7,8,2,3,1]).sort())); // Expected: [5,6]`,
            python: `import json
def findDisappearedNumbers(nums):
    pass

print(json.dumps(sorted(findDisappearedNumbers([4,3,2,7,8,2,3,1])))) # Expected: [5, 6]`,
            java: `class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[5,6]",
            python: "[5, 6]",
            java: "[5, 6]",
        },
    },
    "assign-cookies": {
        id: "assign-cookies",
        title: "Assign Cookies",
        difficulty: "Easy",
        category: "Array • Greedy • Sorting",
        description: {
            text: "Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.",
            notes: [
                "Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.",
            ],
        },
        examples: [
            { input: "g = [1,2,3], s = [1,1]", output: "1" },
            { input: "g = [1,2], s = [1,2,3]", output: "2" },
        ],
        constraints: ["1 ≤ g.length ≤ 3 * 10⁴", "0 ≤ s.length ≤ 3 * 10⁴", "1 ≤ g[i], s[j] ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function findContentChildren(g, s) {
  // Write your solution here
  
}

console.log(findContentChildren([1,2,3], [1,1])); // Expected: 1
console.log(findContentChildren([1,2], [1,2,3])); // Expected: 2`,
            python: `def findContentChildren(g, s):
    pass

print(findContentChildren([1,2,3], [1,1])) # Expected: 1
print(findContentChildren([1,2], [1,2,3])) # Expected: 2`,
            java: `class Solution {
    public int findContentChildren(int[] g, int[] s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n2",
            python: "1\n2",
            java: "1\n2",
        },
    },
    "fibonacci-number": {
        id: "fibonacci-number",
        title: "Fibonacci Number",
        difficulty: "Easy",
        category: "Math • Dynamic Programming • Recursion • Memoization",
        description: {
            text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is:",
            notes: [
                "F(0) = 0, F(1) = 1",
                "F(n) = F(n - 1) + F(n - 2), for n > 1.",
                "Given n, calculate F(n).",
            ],
        },
        examples: [
            { input: "n = 2", output: "1" },
            { input: "n = 3", output: "2" },
            { input: "n = 4", output: "3" },
        ],
        constraints: ["0 ≤ n ≤ 30"],
        starterCode: {
            javascript: `function fib(n) {
  // Write your solution here
  
}

console.log(fib(2)); // Expected: 1
console.log(fib(3)); // Expected: 2
console.log(fib(4)); // Expected: 3`,
            python: `def fib(n):
    pass

print(fib(2)) # Expected: 1
print(fib(3)) # Expected: 2
print(fib(4)) # Expected: 3`,
            java: `class Solution {
    public int fib(int n) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n2\n3",
            python: "1\n2\n3",
            java: "1\n2\n3",
        },
    },
    "relative-ranks": {
        id: "relative-ranks",
        title: "Relative Ranks",
        difficulty: "Easy",
        category: "Array • Sorting • Heap (Priority Queue)",
        description: {
            text: "You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.",
            notes: [
                "The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:",
                "The 1st place athlete's rank is \"Gold Medal\".",
                "The 2nd place athlete's rank is \"Silver Medal\".",
                "The 3rd place athlete's rank is \"Bronze Medal\".",
                "For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is \"x\").",
                "Return an array answer of size n where answer[i] is the rank of the ith athlete.",
            ],
        },
        examples: [
            { input: "score = [5,4,3,2,1]", output: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]' },
            { input: "score = [10,3,8,9,4]", output: '["Gold Medal","5","Bronze Medal","Silver Medal","4"]' },
        ],
        constraints: ["n == score.length", "1 ≤ n ≤ 10⁴", "0 ≤ score[i] ≤ 10⁶", "All the values in score are unique."],
        starterCode: {
            javascript: `function findRelativeRanks(score) {
  // Write your solution here
  
}

console.log(JSON.stringify(findRelativeRanks([5,4,3,2,1]))); // Expected: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(JSON.stringify(findRelativeRanks([10,3,8,9,4]))); // Expected: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]`,
            python: `import json
def findRelativeRanks(score):
    pass

print(json.dumps(findRelativeRanks([5,4,3,2,1]))) # Expected: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
print(json.dumps(findRelativeRanks([10,3,8,9,4]))) # Expected: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]`,
            java: `class Solution {
    public String[] findRelativeRanks(int[] score) {
        return new String[0];
    }
}`,
        },
        expectedOutput: {
            javascript: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]\n["Gold Medal","5","Bronze Medal","Silver Medal","4"]',
            python: '["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]\n["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]',
            java: '["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]\n["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]',
        },
    },
    "array-partition": {
        id: "array-partition",
        title: "Array Partition",
        difficulty: "Easy",
        category: "Array • Greedy • Sorting • Counting Sort",
        description: {
            text: "Given an integer array nums of 2n integers, group these integers into n pairs (a₁, b₁), (a₂, b₂), ..., (aₙ, bₙ) such that the sum of min(aᵢ, bᵢ) for all i is maximized. Return the maximized sum.",
            notes: [],
        },
        examples: [
            { input: "nums = [1,4,3,2]", output: "4" },
            { input: "nums = [6,2,6,5,1,2]", output: "9" },
        ],
        constraints: ["1 ≤ n ≤ 10⁴", "nums.length == 2n", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function arrayPairSum(nums) {
  // Write your solution here
  
}

console.log(arrayPairSum([1,4,3,2])); // Expected: 4
console.log(arrayPairSum([6,2,6,5,1,2])); // Expected: 9`,
            python: `def arrayPairSum(nums):
    pass

print(arrayPairSum([1,4,3,2])) # Expected: 4
print(arrayPairSum([6,2,6,5,1,2])) # Expected: 9`,
            java: `class Solution {
    public int arrayPairSum(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "4\n9",
            python: "4\n9",
            java: "4\n9",
        },
    },
    "self-dividing-numbers": {
        id: "self-dividing-numbers",
        title: "Self Dividing Numbers",
        difficulty: "Easy",
        category: "Math",
        description: {
            text: "A self-dividing number is a number that is divisible by every digit it contains.",
            notes: ["A self-dividing number is not allowed to contain the digit zero.", "Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right]."],
        },
        examples: [
            { input: "left = 1, right = 22", output: "[1,2,3,4,5,6,7,8,9,11,12,15,22]" },
        ],
        constraints: ["1 ≤ left ≤ right ≤ 10⁴"],
        starterCode: {
            javascript: `function selfDividingNumbers(left, right) {
  // Write your solution here
  
}

console.log(JSON.stringify(selfDividingNumbers(1, 22))); // Expected: [1,2,3,4,5,6,7,8,9,11,12,15,22]`,
            python: `import json
def selfDividingNumbers(left, right):
    pass

print(json.dumps(selfDividingNumbers(1, 22))) # Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]`,
            java: `class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,4,5,6,7,8,9,11,12,15,22]",
            python: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]",
            java: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]",
        },
    },
    "binary-number-with-alternating-bits": {
        id: "binary-number-with-alternating-bits",
        title: "Binary Number with Alternating Bits",
        difficulty: "Easy",
        category: "Bit Manipulation",
        description: {
            text: "Given a positive integer n, check whether it has alternating bits: namely, if two adjacent bits will always have different values.",
            notes: [],
        },
        examples: [
            { input: "n = 5", output: "true" },
            { input: "n = 7", output: "false" },
            { input: "n = 11", output: "false" },
        ],
        constraints: ["1 ≤ n ≤ 2³¹ - 1"],
        starterCode: {
            javascript: `function hasAlternatingBits(n) {
  // Write your solution here
  
}

console.log(hasAlternatingBits(5)); // Expected: true
console.log(hasAlternatingBits(7)); // Expected: false
console.log(hasAlternatingBits(11)); // Expected: false`,
            python: `def hasAlternatingBits(n):
    pass

print(hasAlternatingBits(5)) # Expected: True
print(hasAlternatingBits(7)) # Expected: False`,
            java: `class Solution {
    public boolean hasAlternatingBits(int n) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\nfalse",
            python: "True\nFalse",
            java: "true\nfalse\nfalse",
        },
    },
    "toeplitz-matrix": {
        id: "toeplitz-matrix",
        title: "Toeplitz Matrix",
        difficulty: "Easy",
        category: "Array • Matrix",
        description: {
            text: "Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.",
            notes: ["A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements."],
        },
        examples: [
            { input: "matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]", output: "true" },
            { input: "matrix = [[1,2],[2,2]]", output: "false" },
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 ≤ m, n ≤ 20", "0 ≤ matrix[i][j] ≤ 99"],
        starterCode: {
            javascript: `function isToeplitzMatrix(matrix) {
  // Write your solution here
  
}

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])); // Expected: true
console.log(isToeplitzMatrix([[1,2],[2,2]])); // Expected: false`,
            python: `def isToeplitzMatrix(matrix):
    pass

print(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])) # Expected: True
print(isToeplitzMatrix([[1,2],[2,2]])) # Expected: False`,
            java: `class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
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
    "jewels-and-stones": {
        id: "jewels-and-stones",
        title: "Jewels and Stones",
        difficulty: "Easy",
        category: "Hash Table • String",
        description: {
            text: "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.",
            notes: ["Letters are case sensitive, so \"a\" is considered a different type of stone from \"A\"."],
        },
        examples: [
            { input: 'jewels = "aA", stones = "aAAbbbb"', output: "3" },
            { input: 'jewels = "z", stones = "ZZ"', output: "0" },
        ],
        constraints: ["1 ≤ jewels.length, stones.length ≤ 50", "jewels and stones consist of only English letters.", "All the characters of jewels are unique."],
        starterCode: {
            javascript: `function numJewelsInStones(jewels, stones) {
  // Write your solution here
  
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // Expected: 3
console.log(numJewelsInStones("z", "ZZ")); // Expected: 0`,
            python: `def numJewelsInStones(jewels, stones):
    pass

print(numJewelsInStones("aA", "aAAbbbb")) # Expected: 3
print(numJewelsInStones("z", "ZZ")) # Expected: 0`,
            java: `class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3\n0",
            python: "3\n0",
            java: "3\n0",
        },
    },
    "unique-morse-code-words": {
        id: "unique-morse-code-words",
        title: "Unique Morse Code Words",
        difficulty: "Easy",
        category: "Array • Hash Table • String",
        description: {
            text: "International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:",
            notes: [
                "'a' maps to \".-\", 'b' maps to \"-...\", 'c' maps to \"-.-.\", and so on.",
                "Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.",
                "Return the number of different transformations among all words we have.",
            ],
        },
        examples: [
            { input: 'words = ["gin","zen","gig","msg"]', output: "2" },
            { input: 'words = ["a"]', output: "1" },
        ],
        constraints: ["1 ≤ words.length ≤ 100", "1 ≤ words[i].length ≤ 12", "words[i] consists of lowercase English letters."],
        starterCode: {
            javascript: `function uniqueMorseRepresentations(words) {
  // Write your solution here
  
}

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"])); // Expected: 2`,
            python: `def uniqueMorseRepresentations(words):
    pass

print(uniqueMorseRepresentations(["gin","zen","gig","msg"])) # Expected: 2`,
            java: `class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },
    "number-of-lines-to-write-string": {
        id: "number-of-lines-to-write-string",
        title: "Number of Lines to Write String",
        difficulty: "Easy",
        category: "Array • String",
        description: {
            text: "You are writing a string s across several lines, where each line is no more than 100 units wide. You are also given an array widths indicating the width of each English letter (where widths[0] is the width of 'a', widths[1] is the width of 'b', and so on).",
            notes: ["Return an array of length 2: [number of lines, width of the last line]."],
        },
        examples: [
            { input: "widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = \"abcdefghijklmnopqrstuvwxyz\"", output: "[3,60]" },
        ],
        constraints: ["widths.length == 26", "2 ≤ widths[i] ≤ 10", "1 ≤ s.length ≤ 1000", "s consists of lowercase English letters."],
        starterCode: {
            javascript: `function numberOfLines(widths, s) {
  // Write your solution here
  
}

let w = Array(26).fill(10);
console.log(JSON.stringify(numberOfLines(w, "abcdefghijklmnopqrstuvwxyz"))); // Expected: [3,60]`,
            python: `import json
def numberOfLines(widths, s):
    pass

w = [10]*26
print(json.dumps(numberOfLines(w, "abcdefghijklmnopqrstuvwxyz"))) # Expected: [3, 60]`,
            java: `class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,60]",
            python: "[3, 60]",
            java: "[3, 60]",
        },
    },
    "most-common-word": {
        id: "most-common-word",
        title: "Most Common Word",
        difficulty: "Easy",
        category: "Hash Table • String • Counting",
        description: {
            text: "Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.",
            notes: ["The words in paragraph are case-insensitive and the answer should be returned in lowercase."],
        },
        examples: [
            { input: 'paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]', output: '"ball"' },
        ],
        constraints: ["1 ≤ paragraph.length ≤ 1000", "0 ≤ banned.length ≤ 100", "1 ≤ banned[i].length ≤ 10", "paragraph consists of English letters, spaces, or one of the symbols: \"!?',;.\"", "banned[i] consists of lowercase English letters."],
        starterCode: {
            javascript: `function mostCommonWord(paragraph, banned) {
  // Write your solution here
  
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])); // Expected: "ball"`,
            python: `def mostCommonWord(paragraph, banned):
    pass

print(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])) # Expected: "ball"`,
            java: `class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "ball",
            python: "ball",
            java: "ball",
        },
    },
    "shortest-distance-to-a-character": {
        id: "shortest-distance-to-a-character",
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        category: "Array • Two Pointers • String",
        description: {
            text: "Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.",
            notes: [],
        },
        examples: [
            { input: 's = "loveleetcode", c = "e"', output: "[3,2,1,0,1,0,0,1,2,2,1,0]" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁴", "s[i] and c are lowercase English letters.", "c occurs at least once in s."],
        starterCode: {
            javascript: `function shortestToChar(s, c) {
  // Write your solution here
  
}

console.log(JSON.stringify(shortestToChar("loveleetcode", "e"))); // Expected: [3,2,1,0,1,0,0,1,2,2,1,0]`,
            python: `import json
def shortestToChar(s, c):
    pass

print(json.dumps(shortestToChar("loveleetcode", "e"))) # Expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]`,
            java: `class Solution {
    public int[] shortestToChar(String s, char c) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,2,1,0,1,0,0,1,2,2,1,0]",
            python: "[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]",
            java: "[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]",
        },
    },
    "goat-latin": {
        id: "goat-latin",
        title: "Goat Latin",
        difficulty: "Easy",
        category: "String",
        description: {
            text: "You are given a string sentence that consists of words separated by spaces. Each word consists of lowercase and uppercase letters only.",
            notes: [
                "We would like to convert the sentence to \"Goat Latin\" (a made-up language similar to Pig Latin).",
                "If a word begins with a vowel, append \"ma\" to the end.",
                "If a word begins with a consonant, remove the first letter and append it to the end, then append \"ma\".",
                "Add one letter 'a' to the end of each word per its 1-indexed position in the sentence.",
            ],
        },
        examples: [
            { input: 'sentence = "I speak Goat Latin"', output: '"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"' },
        ],
        constraints: ["1 ≤ sentence.length ≤ 150"],
        starterCode: {
            javascript: `function toGoatLatin(sentence) {
  // Write your solution here
  
}

console.log(toGoatLatin("I speak Goat Latin")); // Expected: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"`,
            python: `def toGoatLatin(sentence):
    pass

print(toGoatLatin("I speak Goat Latin")) # Expected: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"`,
            java: `class Solution {
    public String toGoatLatin(String sentence) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
            python: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
            java: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
        },
    },
    "positions-of-large-groups": {
        id: "positions-of-large-groups",
        title: "Positions of Large Groups",
        difficulty: "Easy",
        category: "String",
        description: {
            text: "In a string s of lowercase letters, these letters form consecutive groups of the same character.",
            notes: ["We call a group large if it has 3 or more characters.", "Return the intervals of every large group sorted in increasing order by start index."],
        },
        examples: [
            { input: 's = "abbxxxxzzy"', output: "[[3,6]]" },
            { input: 's = "abc"', output: "[]" },
            { input: 's = "abcdddeeeeaabbbcd"', output: "[[3,5],[6,9],[12,14]]" },
        ],
        constraints: ["1 ≤ s.length ≤ 1000"],
        starterCode: {
            javascript: `function largeGroupPositions(s) {
  // Write your solution here
  
}

console.log(JSON.stringify(largeGroupPositions("abbxxxxzzy"))); // Expected: [[3,6]]
console.log(JSON.stringify(largeGroupPositions("abcdddeeeeaabbbcd"))); // Expected: [[3,5],[6,9],[12,14]]`,
            python: `import json
def largeGroupPositions(s):
    pass

print(json.dumps(largeGroupPositions("abbxxxxzzy"))) # Expected: [[3, 6]]
print(json.dumps(largeGroupPositions("abcdddeeeeaabbbcd"))) # Expected: [[3, 5], [6, 9], [12, 14]]`,
            java: `class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        return new ArrayList<>();
    }
}`,
        },
        expectedOutput: {
            javascript: "[[3,6]]\n[[3,5],[6,9],[12,14]]",
            python: "[[3, 6]]\n[[3, 5], [6, 9], [12, 14]]",
            java: "[[3, 6]]\n[[3, 5], [6, 9], [12, 14]]",
        },
    },
    "flipping-an-image": {
        id: "flipping-an-image",
        title: "Flipping an Image",
        difficulty: "Easy",
        category: "Array • Matrix • Two Pointers • Simulation",
        description: {
            text: "Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.",
            notes: [
                "To flip an image horizontally means that each row of the image is reversed.",
                "To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.",
            ],
        },
        examples: [
            { input: "image = [[1,1,0],[1,0,1],[0,1,1]]", output: "[[1,0,0],[0,1,0],[0,0,1]]" },
        ],
        constraints: ["n == image.length", "n == image[i].length", "1 ≤ n ≤ 20", "image[i][j] is either 0 or 1."],
        starterCode: {
            javascript: `function flipAndInvertImage(image) {
  // Write your solution here
  
}

console.log(JSON.stringify(flipAndInvertImage([[1,1,0],[1,0,1],[0,1,1]]))); // Expected: [[1,0,0],[0,1,0],[0,0,1]]`,
            python: `import json
def flipAndInvertImage(image):
    pass

print(json.dumps(flipAndInvertImage([[1,1,0],[1,0,1],[0,1,1]]))) # Expected: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]`,
            java: `class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        return image;
    }
}`,
        },
        expectedOutput: {
            javascript: "[[1,0,0],[0,1,0],[0,0,1]]",
            python: "[[1, 0, 0], [0, 1, 0], [0, 0, 1]]",
            java: "[[1, 0, 0], [0, 1, 0], [0, 0, 1]]",
        },
    },
    "backspace-string-compare": {
        id: "backspace-string-compare",
        title: "Backspace String Compare",
        difficulty: "Easy",
        category: "Two Pointers • String • Stack • Simulation",
        description: {
            text: "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
            notes: ["Note that after backspacing an empty text, the text will still be empty."],
        },
        examples: [
            { input: 's = "ab#c", t = "ad#c"', output: "true" },
            { input: 's = "ab##", t = "c#d#"', output: "true" },
            { input: 's = "a#c", t = "b"', output: "false" },
        ],
        constraints: ["1 ≤ s.length, t.length ≤ 200", "s and t consist of lowercase letters and '#' characters."],
        starterCode: {
            javascript: `function backspaceCompare(s, t) {
  // Write your solution here
  
}

console.log(backspaceCompare("ab#c", "ad#c")); // Expected: true
console.log(backspaceCompare("ab##", "c#d#")); // Expected: true
console.log(backspaceCompare("a#c", "b")); // Expected: false`,
            python: `def backspaceCompare(s, t):
    pass

print(backspaceCompare("ab#c", "ad#c")) # Expected: True
print(backspaceCompare("ab##", "c#d#")) # Expected: True
print(backspaceCompare("a#c", "b")) # Expected: False`,
            java: `class Solution {
    public boolean backspaceCompare(String s, String t) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },
    "peak-index-in-a-mountain-array": {
        id: "peak-index-in-a-mountain-array",
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        category: "Array • Binary Search",
        description: {
            text: "An array arr is a mountain if the following properties hold:",
            notes: [
                "arr.length >= 3",
                "There exists some i with 0 < i < arr.length - 1 such that:",
                "arr[0] < arr[1] < ... < arr[i - 1] < arr[i]",
                "arr[i] > arr[i + 1] > ... > arr[arr.length - 1]",
                "Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].",
            ],
        },
        examples: [
            { input: "arr = [0,1,0]", output: "1" },
            { input: "arr = [0,2,1,0]", output: "1" },
            { input: "arr = [0,10,5,2]", output: "1" },
        ],
        constraints: ["3 ≤ arr.length ≤ 10⁵", "0 ≤ arr[i] ≤ 10⁶", "arr is guaranteed to be a mountain array."],
        starterCode: {
            javascript: `function peakIndexInMountainArray(arr) {
  // Write your solution here
  
}

console.log(peakIndexInMountainArray([0,1,0])); // Expected: 1
console.log(peakIndexInMountainArray([0,2,1,0])); // Expected: 1`,
            python: `def peakIndexInMountainArray(arr):
    pass

print(peakIndexInMountainArray([0,1,0])) # Expected: 1
print(peakIndexInMountainArray([0,2,1,0])) # Expected: 1`,
            java: `class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n1",
            python: "1\n1",
            java: "1\n1",
        },
    },
    "lemonade-change": {
        id: "lemonade-change",
        title: "Lemonade Change",
        difficulty: "Easy",
        category: "Array • Greedy",
        description: {
            text: "At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer such that the net transaction is that the customer pays $5.",
            notes: ["Note that you do not have any change in hand at first.", "Return true if you can provide every customer with the correct change, or false otherwise."],
        },
        examples: [
            { input: "bills = [5,5,5,10,20]", output: "true" },
            { input: "bills = [5,5,10,10,20]", output: "false" },
        ],
        constraints: ["1 ≤ bills.length ≤ 10⁵", "bills[i] is either 5, 10, or 20."],
        starterCode: {
            javascript: `function lemonadeChange(bills) {
  // Write your solution here
  
}

console.log(lemonadeChange([5,5,5,10,20])); // Expected: true
console.log(lemonadeChange([5,5,10,10,20])); // Expected: false`,
            python: `def lemonadeChange(bills):
    pass

print(lemonadeChange([5,5,5,10,20])) # Expected: True
print(lemonadeChange([5,5,10,10,20])) # Expected: False`,
            java: `class Solution {
    public boolean lemonadeChange(int[] bills) {
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
    "buddy-strings": {
        id: "buddy-strings",
        title: "Buddy Strings",
        difficulty: "Easy",
        category: "Hash Table • String",
        description: {
            text: "Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.",
            notes: ["Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].", "For example, swapping at indices 0 and 2 in \"abcd\" results in \"cbad\"."],
        },
        examples: [
            { input: 's = "ab", goal = "ba"', output: "true" },
            { input: 's = "ab", goal = "ab"', output: "false" },
            { input: 's = "aa", goal = "aa"', output: "true" },
        ],
        constraints: ["1 ≤ s.length, goal.length ≤ 2 * 10⁴", "s and goal consist of lowercase English letters."],
        starterCode: {
            javascript: `function buddyStrings(s, goal) {
  // Write your solution here
  
}

console.log(buddyStrings("ab", "ba")); // Expected: true
console.log(buddyStrings("ab", "ab")); // Expected: false
console.log(buddyStrings("aa", "aa")); // Expected: true`,
            python: `def buddyStrings(s, goal):
    pass

print(buddyStrings("ab", "ba")) # Expected: True
print(buddyStrings("ab", "ab")) # Expected: False`,
            java: `class Solution {
    public boolean buddyStrings(String s, String goal) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },
    "binary-gap": {
        id: "binary-gap",
        title: "Binary Gap",
        difficulty: "Easy",
        category: "Bit Manipulation",
        description: {
            text: "Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.",
            notes: ["Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions.", "For example, in the binary representation of 22 (10110), the 1's are at positions 0, 2, and 3. The adjacent pairs of 1's are (3, 2) and (2, 0). The maximum distance is max(3-2, 2-0) = 2."],
        },
        examples: [
            { input: "n = 22", output: "2" },
            { input: "n = 8", output: "0" },
            { input: "n = 5", output: "2" },
        ],
        constraints: ["1 ≤ n ≤ 10⁹"],
        starterCode: {
            javascript: `function binaryGap(n) {
  // Write your solution here
  
}

console.log(binaryGap(22)); // Expected: 2
console.log(binaryGap(8)); // Expected: 0
console.log(binaryGap(5)); // Expected: 2`,
            python: `def binaryGap(n):
    pass

print(binaryGap(22)) # Expected: 2
print(binaryGap(8)) # Expected: 0`,
            java: `class Solution {
    public int binaryGap(int n) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2\n0\n2",
            python: "2\n0\n2",
            java: "2\n0\n2",
        },
    },
    "middle-of-the-linked-list": {
        id: "middle-of-the-linked-list",
        title: "Middle of the Linked List",
        difficulty: "Easy",
        category: "Linked List • Two Pointers",
        description: {
            text: "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
            notes: ["Input represented as array for this exercise."],
        },
        examples: [
            { input: "head = [1,2,3,4,5]", output: "[3,4,5]" },
            { input: "head = [1,2,3,4,5,6]", output: "[4,5,6]" },
        ],
        constraints: ["Number of nodes in the list is in range [1, 100]", "1 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function middleNode(head) {
  // Write your solution here
  
}

console.log(JSON.stringify(middleNode([1,2,3,4,5]))); // Expected: [3,4,5]
console.log(JSON.stringify(middleNode([1,2,3,4,5,6]))); // Expected: [4,5,6]`,
            python: `import json
def middleNode(head):
    pass

print(json.dumps(middleNode([1,2,3,4,5]))) # Expected: [3, 4, 5]`,
            java: `class Solution {
    public ListNode middleNode(ListNode head) {
        return head;
    }
}`,
        },
        expectedOutput: {
            javascript: "[3,4,5]\n[4,5,6]",
            python: "[3, 4, 5]\n[4, 5, 6]",
            java: "[3, 4, 5]\n[4, 5, 6]",
        },
    },
    "fair-candy-swap": {
        id: "fair-candy-swap",
        title: "Fair Candy Swap",
        difficulty: "Easy",
        category: "Array • Hash Table • Binary Search • Sorting",
        description: {
            text: "Alice and Bob have a different total number of candies. Alice has candies of sizes aliceSizes[i], and Bob has candies of sizes bobSizes[j].",
            notes: ["They would like to exchange one candy each so that after the exchange, they both have the same total amount of candy.", "Return an integer array answer where answer[0] is the size of the candy that Alice must exchange, and answer[1] is the size of the candy that Bob must exchange."],
        },
        examples: [
            { input: "aliceSizes = [1,1], bobSizes = [2,2]", output: "[1,2]" },
            { input: "aliceSizes = [1,2], bobSizes = [2,3]", output: "[1,2]" },
        ],
        constraints: ["1 ≤ aliceSizes.length, bobSizes.length ≤ 10⁴", "1 ≤ aliceSizes[i], bobSizes[j] ≤ 10⁵"],
        starterCode: {
            javascript: `function fairCandySwap(aliceSizes, bobSizes) {
  // Write your solution here
  
}

console.log(JSON.stringify(fairCandySwap([1,1], [2,2]))); // Expected: [1,2]`,
            python: `import json
def fairCandySwap(aliceSizes, bobSizes):
    pass

print(json.dumps(fairCandySwap([1,1], [2,2]))) # Expected: [1, 2]`,
            java: `class Solution {
    public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2]",
            python: "[1, 2]",
            java: "[1, 2]",
        },
    },
    "monotonic-array": {
        id: "monotonic-array",
        title: "Monotonic Array",
        difficulty: "Easy",
        category: "Array",
        description: {
            text: "An array is monotonic if it is either monotone increasing or monotone decreasing.",
            notes: ["An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].", "Return true if the given array is monotonic, or false otherwise."],
        },
        examples: [
            { input: "nums = [1,2,2,3]", output: "true" },
            { input: "nums = [6,5,4,4]", output: "true" },
            { input: "nums = [1,3,2]", output: "false" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁵ ≤ nums[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function isMonotonic(nums) {
  // Write your solution here
  
}

console.log(isMonotonic([1,2,2,3])); // Expected: true
console.log(isMonotonic([6,5,4,4])); // Expected: true
console.log(isMonotonic([1,3,2])); // Expected: false`,
            python: `def isMonotonic(nums):
    pass

print(isMonotonic([1,2,2,3])) # Expected: True
print(isMonotonic([6,5,4,4])) # Expected: True`,
            java: `class Solution {
    public boolean isMonotonic(int[] nums) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
            python: "True\nTrue\nFalse",
            java: "true\ntrue\nfalse",
        },
    },
    "sort-array-by-parity": {
        id: "sort-array-by-parity",
        title: "Sort Array By Parity",
        difficulty: "Easy",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.",
            notes: ["Return any array that satisfies this condition."],
        },
        examples: [
            { input: "nums = [3,1,2,4]", output: "[2,4,3,1] (or any other valid combination)" },
        ],
        constraints: ["1 ≤ nums.length ≤ 5000", "0 ≤ nums[i] ≤ 5000"],
        starterCode: {
            javascript: `function sortArrayByParity(nums) {
  // Write your solution here
  
}

// Logic: Check if all even numbers are before odd numbers
function checkParity(arr) {
  let oddFound = false;
  for (let x of arr) {
    if (x % 2 !== 0) oddFound = true;
    else if (oddFound) return false;
  }
  return true;
}

console.log(checkParity(sortArrayByParity([3,1,2,4]))); // Expected: true`,
            python: `def sortArrayByParity(nums):
    pass

def checkParity(arr):
    oddFound = False
    for x in arr:
        if x % 2 != 0: oddFound = True
        elif oddFound: return False
    return True

print(checkParity(sortArrayByParity([3,1,2,4]))) # Expected: True`,
            java: `class Solution {
    public int[] sortArrayByParity(int[] nums) {
        return nums;
    }
}`,
        },
        expectedOutput: {
            javascript: "true",
            python: "True",
            java: "true",
        },
    },
    "valid-mountain-array": {
        id: "valid-mountain-array",
        title: "Valid Mountain Array",
        difficulty: "Easy",
        category: "Array",
        description: {
            text: "Given an array of integers arr, return true if and only if it is a valid mountain array.",
            notes: [],
        },
        examples: [
            { input: "arr = [2,1]", output: "false" },
            { input: "arr = [3,5,5]", output: "false" },
            { input: "arr = [0,3,2,1]", output: "true" },
        ],
        constraints: ["1 ≤ arr.length ≤ 10⁴", "0 ≤ arr[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function validMountainArray(arr) {
  // Write your solution here
  
}

console.log(validMountainArray([2,1])); // Expected: false
console.log(validMountainArray([3,5,5])); // Expected: false
console.log(validMountainArray([0,3,2,1])); // Expected: true`,
            python: `def validMountainArray(arr):
    pass

print(validMountainArray([2,1])) # Expected: False
print(validMountainArray([3,5,5])) # Expected: False
print(validMountainArray([0,3,2,1])) # Expected: True`,
            java: `class Solution {
    public boolean validMountainArray(int[] arr) {
        return false;
    }
}`,
        },
        expectedOutput: {
            javascript: "false\nfalse\ntrue",
            python: "False\nFalse\nTrue",
            java: "false\nfalse\ntrue",
        },
    },
    "di-string-match": {
        id: "di-string-match",
        title: "DI String Match",
        difficulty: "Easy",
        category: "Array • Two Pointers • String • Greedy",
        description: {
            text: "A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:",
            notes: ["s[i] == 'I' if perm[i] < perm[i + 1]", "s[i] == 'D' if perm[i] > perm[i + 1]", "Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them."],
        },
        examples: [
            { input: 's = "IDID"', output: "[0,4,1,3,2]" },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s consists only of 'I' and 'D'."],
        starterCode: {
            javascript: `function diStringMatch(s) {
  // Write your solution here
  
}

console.log(JSON.stringify(diStringMatch("IDID")));`,
            python: `import json
def diStringMatch(s):
    pass

print(json.dumps(diStringMatch("IDID")))`,
            java: `class Solution {
    public int[] diStringMatch(String s) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,4,1,3,2]",
            python: "[0, 4, 1, 3, 2]",
            java: "[0, 4, 1, 3, 2]",
        },
    },
    "squares-of-a-sorted-array": {
        id: "squares-of-a-sorted-array",
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers • Sorting",
        description: {
            text: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
            notes: [],
        },
        examples: [
            { input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴", "nums is sorted in non-decreasing order."],
        starterCode: {
            javascript: `function sortedSquares(nums) {
  // Write your solution here
  
}

console.log(JSON.stringify(sortedSquares([-4,-1,0,3,10]))); // Expected: [0,1,9,16,100]`,
            python: `import json
def sortedSquares(nums):
    pass

print(json.dumps(sortedSquares([-4,-1,0,3,10]))) # Expected: [0, 1, 9, 16, 100]`,
            java: `class Solution {
    public int[] sortedSquares(int[] nums) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1,9,16,100]",
            python: "[0, 1, 9, 16, 100]",
            java: "[0, 1, 9, 16, 100]",
        },
    },
    "distribute-candies-to-people": {
        id: "distribute-candies-to-people",
        title: "Distribute Candies to People",
        difficulty: "Easy",
        category: "Math • Simulation",
        description: {
            text: "We distribute some number of candies, to a row of n = num_people people in the following way:",
            notes: [
                "We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.",
                "Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2n candies to the last person.",
                "This process repeats until we run out of candies. The last person will receive all of our remaining candies (not necessarily one more than the previous gift).",
                "Return an array (of length num_people and sum candies) that represents the final distribution of candies.",
            ],
        },
        examples: [
            { input: "candies = 7, num_people = 4", output: "[1,2,3,1]" },
            { input: "candies = 10, num_people = 3", output: "[5,2,3]" },
        ],
        constraints: ["1 ≤ candies ≤ 10⁹", "1 ≤ num_people ≤ 1000"],
        starterCode: {
            javascript: `function distributeCandies(candies, num_people) {
  // Write your solution here
  
}

console.log(JSON.stringify(distributeCandies(7, 4))); // Expected: [1,2,3,1]
console.log(JSON.stringify(distributeCandies(10, 3))); // Expected: [5,2,3]`,
            python: `import json
def distributeCandies(candies, num_people):
    pass

print(json.dumps(distributeCandies(7, 4))) # Expected: [1, 2, 3, 1]`,
            java: `class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        return new int[0];
    }
}`,
        },
        expectedOutput: {
            javascript: "[1,2,3,1]\n[5,2,3]",
            python: "[1, 2, 3, 1]\n[5, 2, 3]",
            java: "[1, 2, 3, 1]\n[5, 2, 3]",
        },
    },
    "find-words-that-can-be-formed-by-characters": {
        id: "find-words-that-can-be-formed-by-characters",
        title: "Find Words That Can Be Formed by Characters",
        difficulty: "Easy",
        category: "Array • Hash Table • String • Counting",
        description: {
            text: "You are given an array of strings words and a string chars.",
            notes: ["A string is good if it can be formed by characters from chars (each character can only be used once).", "Return the sum of lengths of all good strings in words."],
        },
        examples: [
            { input: 'words = ["cat","bt","hat","tree"], chars = "atach"', output: "6" },
        ],
        constraints: ["1 ≤ words.length ≤ 1000", "1 ≤ words[i].length, chars.length ≤ 100", "words[i] and chars consist of lowercase English letters."],
        starterCode: {
            javascript: `function countCharacters(words, chars) {
  // Write your solution here
  
}

console.log(countCharacters(["cat","bt","hat","tree"], "atach")); // Expected: 6`,
            python: `def countCharacters(words, chars):
    pass

print(countCharacters(["cat","bt","hat","tree"], "atach")) # Expected: 6`,
            java: `class Solution {
    public int countCharacters(String[] words, String chars) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "6",
            python: "6",
            java: "6",
        },
    },
    "unique-number-of-occurrences": {
        id: "unique-number-of-occurrences",
        title: "Unique Number of Occurrences",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.",
            notes: [],
        },
        examples: [
            { input: "arr = [1,2,2,1,1,3]", output: "true" },
            { input: "arr = [1,2]", output: "false" },
            { input: "arr = [-3,0,1,-3,1,1,1,-3,10,0]", output: "true" },
        ],
        constraints: ["1 ≤ arr.length ≤ 1000", "-1000 ≤ arr[i] ≤ 1000"],
        starterCode: {
            javascript: `function uniqueOccurrences(arr) {
  // Write your solution here
  
}

console.log(uniqueOccurrences([1,2,2,1,1,3])); // Expected: true
console.log(uniqueOccurrences([1,2])); // Expected: false`,
            python: `def uniqueOccurrences(arr):
    pass

print(uniqueOccurrences([1,2,2,1,1,3])) # Expected: True
print(uniqueOccurrences([1,2])) # Expected: False`,
            java: `class Solution {
    public boolean uniqueOccurrences(int[] arr) {
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
    "check-if-it-is-a-straight-line": {
        id: "check-if-it-is-a-straight-line",
        title: "Check If It Is a Straight Line",
        difficulty: "Easy",
        category: "Array • Math • Geometry",
        description: {
            text: "You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.",
            notes: [],
        },
        examples: [
            { input: "coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]", output: "true" },
            { input: "coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]", output: "false" },
        ],
        constraints: ["2 ≤ coordinates.length ≤ 1000", "coordinates[i].length == 2", "-10⁴ ≤ x, y ≤ 10⁴", "coordinates contains no duplicate points."],
        starterCode: {
            javascript: `function checkStraightLine(coordinates) {
  // Write your solution here
  
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // Expected: true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // Expected: false`,
            python: `def checkStraightLine(coordinates):
    pass

print(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])) # Expected: True`,
            java: `class Solution {
    public boolean checkStraightLine(int[][] coordinates) {
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
    "cells-with-odd-values-in-a-matrix": {
        id: "cells-with-odd-values-in-a-matrix",
        title: "Cells with Odd Values in a Matrix",
        difficulty: "Easy",
        category: "Array • Matrix • Simulation",
        description: {
            text: "There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some operations on the matrix.",
            notes: ["For each location [ri, ci], increment all the cells in row ri and column ci by 1.", "Return the number of odd-valued cells in the matrix after applying all indices."],
        },
        examples: [
            { input: "m = 2, n = 3, indices = [[0,1],[1,1]]", output: "6" },
        ],
        constraints: ["1 ≤ m, n ≤ 50", "1 ≤ indices.length ≤ 100", "0 ≤ ri < m", "0 ≤ ci < n"],
        starterCode: {
            javascript: `function oddCells(m, n, indices) {
  // Write your solution here
  
}

console.log(oddCells(2, 3, [[0,1],[1,1]])); // Expected: 6`,
            python: `def oddCells(m, n, indices):
    pass

print(oddCells(2, 3, [[0, 1], [1, 1]])) # Expected: 6`,
            java: `class Solution {
    public int oddCells(int m, int n, int[][] indices) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "6",
            python: "6",
            java: "6",
        },
    },
    "find-winner-on-a-tic-tac-toe-game": {
        id: "find-winner-on-a-tic-tac-toe-game",
        title: "Find Winner on a Tic Tac Toe Game",
        difficulty: "Easy",
        category: "Array • Hash Table • Matrix • Simulation",
        description: {
            text: "Tic-tac-toe is played by two players A and B on a 3 x 3 grid.",
            notes: [
                "Players take turns placing characters into empty squares ' '.",
                "The first player A always places 'X' characters, while the second player B always places 'O' characters.",
                "The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.",
                "If all squares are filled and no player has won, the game results in a draw.",
                "If there are still empty squares and no player has won, the game is ongoing.",
                "Given a 2D integer array moves where moves[i] = [rowi, coli] represents that the ith move has been made on that square of the grid, return the winner of the game (A or B) if there is one. If the game ends in a draw, return \"Draw\". If there are still moves to be made and there is no winner, return \"Pending\".",
            ],
        },
        examples: [
            { input: "moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]", output: '"A"' },
        ],
        constraints: ["1 ≤ moves.length ≤ 9", "moves[i].length == 2", "0 ≤ rowi, coli <= 2", "All the moves are unique."],
        starterCode: {
            javascript: `function tictactoe(moves) {
  // Write your solution here
  
}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // Expected: "A"`,
            python: `def tictactoe(moves):
    pass

print(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])) # Expected: "A"`,
            java: `class Solution {
    public String tictactoe(int[][] moves) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "A",
            python: "A",
            java: "A",
        },
    },
    "convert-binary-number-in-a-linked-list-to-integer": {
        id: "convert-binary-number-in-a-linked-list-to-integer",
        title: "Convert Binary Number in a Linked List to Integer",
        difficulty: "Easy",
        category: "Linked List • Math",
        description: {
            text: "Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.",
            notes: ["Return the decimal value of the number in the linked list.", "The most significant bit is at the head of the linked list."],
        },
        examples: [
            { input: "head = [1,0,1]", output: "5" },
            { input: "head = [0]", output: "0" },
        ],
        constraints: ["The Linked List is not empty.", "Number of nodes will not exceed 30.", "Each node's value is either 0 or 1."],
        starterCode: {
            javascript: `function getDecimalValue(head) {
  // Write your solution here
  
}

console.log(getDecimalValue([1,0,1])); // Expected: 5`,
            python: `def getDecimalValue(head):
    pass

print(getDecimalValue([1, 0, 1])) # Expected: 5`,
            java: `class Solution {
    public int getDecimalValue(ListNode head) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "5",
            python: "5",
            java: "5",
        },
    },
    "replace-elements-with-greatest-element-on-right-side": {
        id: "replace-elements-with-greatest-element-on-right-side",
        title: "Replace Elements with Greatest Element on Right Side",
        difficulty: "Easy",
        category: "Array",
        description: {
            text: "Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.",
            notes: ["After doing so, return the array."],
        },
        examples: [
            { input: "arr = [17,18,5,4,6,1]", output: "[18,6,6,6,1,-1]" },
        ],
        constraints: ["1 ≤ arr.length ≤ 10⁴", "1 ≤ arr[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function replaceElements(arr) {
  // Write your solution here
  
}

console.log(JSON.stringify(replaceElements([17,18,5,4,6,1]))); // Expected: [18,6,6,6,1,-1]`,
            python: `import json
def replaceElements(arr):
    pass

print(json.dumps(replaceElements([17, 18, 5, 4, 6, 1]))) # Expected: [18, 6, 6, 6, 1, -1]`,
            java: `class Solution {
    public int[] replaceElements(int[] arr) {
        return arr;
    }
}`,
        },
        expectedOutput: {
            javascript: "[18,6,6,6,1,-1]",
            python: "[18, 6, 6, 6, 1, -1]",
            java: "[18, 6, 6, 6, 1, -1]",
        },
    },
    "deepest-leaves-sum": {
        id: "deepest-leaves-sum",
        title: "Deepest Leaves Sum",
        difficulty: "Medium",
        category: "Tree • Depth-First Search • Breadth-First Search • Binary Tree",
        description: {
            text: "Given the root of a binary tree, return the sum of values of its deepest leaves.",
            notes: ["For this exercise, the input is represented as an array."],
        },
        examples: [
            { input: "root = [1,2,3,4,5,null,6,7,null,null,null,null,8]", output: "15" },
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 10⁴].", "1 ≤ Node.val ≤ 100"],
        starterCode: {
            javascript: `function deepestLeavesSum(root) {
  // Write your solution here
  
}

console.log(deepestLeavesSum([1,2,3,4,5,null,6,7,null,null,null,null,8])); // Expected: 15`,
            python: `def deepestLeavesSum(root):
    pass

print(deepestLeavesSum([1,2,3,4,5,None,6,7,None,None,None,None,8])) # Expected: 15`,
            java: `class Solution {
    public int deepestLeavesSum(TreeNode root) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "15",
            python: "15",
            java: "15",
        },
    },
    "find-lucky-integer-in-an-array": {
        id: "find-lucky-integer-in-an-array",
        title: "Find Lucky Integer in an Array",
        difficulty: "Easy",
        category: "Array • Hash Table • Counting",
        description: {
            text: "Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.",
            notes: ["Return the largest lucky integer in the array. If there is no lucky integer return -1."],
        },
        examples: [
            { input: "arr = [2,2,3,4]", output: "2" },
            { input: "arr = [1,2,2,3,3,3]", output: "3" },
        ],
        constraints: ["1 ≤ arr.length ≤ 500", "1 ≤ arr[i] ≤ 500"],
        starterCode: {
            javascript: `function findLucky(arr) {
  // Write your solution here
  
}

console.log(findLucky([2,2,3,4])); // Expected: 2
console.log(findLucky([1,2,2,3,3,3])); // Expected: 3`,
            python: `def findLucky(arr):
    pass

print(findLucky([2, 2, 3, 4])) # Expected: 2`,
            java: `class Solution {
    public int findLucky(int[] arr) {
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
    "build-array-from-permutation": {
        id: "build-array-from-permutation",
        title: "Build Array from Permutation",
        difficulty: "Easy",
        category: "Array • Simulation",
        description: {
            text: "Given a zero-indexed permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.",
            notes: ["A zero-indexed permutation nums is an array of distinct integers from 0 to nums.length - 1."],
        },
        examples: [
            { input: "nums = [0,2,1,5,3,4]", output: "[0,1,2,4,5,3]" },
        ],
        constraints: ["1 ≤ nums.length ≤ 1000", "0 ≤ nums[i] < nums.length", "The elements in nums are distinct."],
        starterCode: {
            javascript: `function buildArray(nums) {
  // Write your solution here
  
}

console.log(JSON.stringify(buildArray([0,2,1,5,3,4]))); // Expected: [0,1,2,4,5,3]`,
            python: `import json
def buildArray(nums):
    pass

print(json.dumps(buildArray([0, 2, 1, 5, 3, 4]))) # Expected: [0, 1, 2, 4, 5, 3]`,
            java: `class Solution {
    public int[] buildArray(int[] nums) {
        return nums;
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1,2,4,5,3]",
            python: "[0, 1, 2, 4, 5, 3]",
            java: "[0, 1, 2, 4, 5, 3]",
        },
    },
    "final-value-of-variable-after-performing-operations": {
        id: "final-value-of-variable-after-performing-operations",
        title: "Final Value of Variable After Performing Operations",
        difficulty: "Easy",
        category: "Array • String • Simulation",
        description: {
            text: "There is a programming language with only four operations and one variable X:",
            notes: ["++X and X++ increments the value of the variable X by 1.", "--X and X-- decrements the value of the variable X by 1.", "Initially, the value of X is 0.", "Given an array of strings operations containing a list of operations, return the final value of X after performing all operations."],
        },
        examples: [
            { input: 'operations = ["--X","X++","X++"]', output: "1" },
        ],
        constraints: ["1 ≤ operations.length ≤ 100", "operations[i] will be either \"++X\", \"X++\", \"--X\", or \"X--\"."],
        starterCode: {
            javascript: `function finalValueAfterOperations(operations) {
  // Write your solution here
  
}

console.log(finalValueAfterOperations(["--X","X++","X++"])); // Expected: 1`,
            python: `def finalValueAfterOperations(operations):
    pass

print(finalValueAfterOperations(["--X", "X++", "X++"])) # Expected: 1`,
            java: `class Solution {
    public int finalValueAfterOperations(String[] operations) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1",
            python: "1",
            java: "1",
        },
    },
    "number-of-arithmetic-triplets": {
        id: "number-of-arithmetic-triplets",
        title: "Number of Arithmetic Triplets",
        difficulty: "Easy",
        category: "Array • Hash Table • Two Pointers • Enumeration",
        description: {
            text: "You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:",
            notes: [
                "i < j < k",
                "nums[j] - nums[i] == diff",
                "nums[k] - nums[j] == diff",
                "Return the number of unique arithmetic triplets.",
            ],
        },
        examples: [
            { input: "nums = [0,1,4,6,7,10], diff = 3", output: "2" },
        ],
        constraints: ["3 ≤ nums.length ≤ 200", "0 ≤ nums[i] ≤ 200", "1 ≤ diff ≤ 50", "nums is strictly increasing."],
        starterCode: {
            javascript: `function arithmeticTriplets(nums, diff) {
  // Write your solution here
  
}

console.log(arithmeticTriplets([0,1,4,6,7,10], 3)); // Expected: 2`,
            python: `def arithmeticTriplets(nums, diff):
    pass

print(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)) # Expected: 2`,
            java: `class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
        },
    },
    "largest-substring-between-two-equal-characters": {
        id: "largest-substring-between-two-equal-characters",
        title: "Largest Substring Between Two Equal Characters",
        difficulty: "Easy",
        category: "Hash Table • String",
        description: {
            text: "Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.",
            notes: ["A substring is a contiguous sequence of characters within a string."],
        },
        examples: [
            { input: 's = "aa"', output: "0" },
            { input: 's = "abca"', output: "2" },
            { input: 's = "cbzxy"', output: "-1" },
        ],
        constraints: ["1 ≤ s.length ≤ 300", "s contains only lowercase English letters."],
        starterCode: {
            javascript: `function maxLengthBetweenEqualCharacters(s) {
  // Write your solution here
  
}

console.log(maxLengthBetweenEqualCharacters("aa")); // Expected: 0
console.log(maxLengthBetweenEqualCharacters("abca")); // Expected: 2
console.log(maxLengthBetweenEqualCharacters("cbzxy")); // Expected: -1`,
            python: `def maxLengthBetweenEqualCharacters(s):
    pass

print(maxLengthBetweenEqualCharacters("aa")) # Expected: 0`,
            java: `class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "0\n2\n-1",
            python: "0\n2\n-1",
            java: "0\n2\n-1",
        },
    },
    "find-the-highest-altitude": {
        id: "find-the-highest-altitude",
        title: "Find the Highest Altitude",
        difficulty: "Easy",
        category: "Array • Prefix Sum",
        description: {
            text: "There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts at point 0 with altitude 0.",
            notes: ["You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point."],
        },
        examples: [
            { input: "gain = [-5,1,5,0,-7]", output: "1" },
            { input: "gain = [-4,-3,-2,-1,4,3,2]", output: "0" },
        ],
        constraints: ["n == gain.length", "1 ≤ n ≤ 100", "-100 ≤ gain[i] ≤ 100"],
        starterCode: {
            javascript: `function largestAltitude(gain) {
  // Write your solution here
  
}

console.log(largestAltitude([-5,1,5,0,-7])); // Expected: 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); // Expected: 0`,
            python: `def largestAltitude(gain):
    pass

print(largestAltitude([-5, 1, 5, 0, -7])) # Expected: 1`,
            java: `class Solution {
    public int largestAltitude(int[] gain) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "1\n0",
            python: "1\n0",
            java: "1\n0",
        },
    },
    "calculate-money-in-leetcode-bank": {
        id: "calculate-money-in-leetcode-bank",
        title: "Calculate Money in Leetcode Bank",
        difficulty: "Easy",
        category: "Math • Simulation",
        description: {
            text: "Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.",
            notes: [
                "He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.",
                "Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.",
            ],
        },
        examples: [
            { input: "n = 4", output: "10" },
            { input: "n = 10", output: "37" },
        ],
        constraints: ["1 ≤ n ≤ 1000"],
        starterCode: {
            javascript: `function totalMoney(n) {
  // Write your solution here
  
}

console.log(totalMoney(4)); // Expected: 10
console.log(totalMoney(10)); // Expected: 37`,
            python: `def totalMoney(n):
    pass

print(totalMoney(4)) # Expected: 10`,
            java: `class Solution {
    public int totalMoney(int n) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "10\n37",
            python: "10\n37",
            java: "10\n37",
        },
    },
    "maximum-nesting-depth-of-the-parentheses": {
        id: "maximum-nesting-depth-of-the-parentheses",
        title: "Maximum Nesting Depth of the Parentheses",
        difficulty: "Easy",
        category: "String • Stack",
        description: {
            text: "A string is a valid parentheses string (denoted VPS) if it meets one of the following:",
            notes: [
                "It is an empty string \"\", or a single character not equal to \"(\" or \")\".",
                "It can be written as AB (A concatenated with B), where A and B are VPS's.",
                "It can be written as (A), where A is a VPS.",
                "We can similarly define the nesting depth depth(s) of any VPS s.",
                "Given a VPS s, return the nesting depth of s.",
            ],
        },
        examples: [
            { input: 's = "(1+(2*3)+((8)/4))+1"', output: "3" },
        ],
        constraints: ["1 ≤ s.length ≤ 100", "s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'."],
        starterCode: {
            javascript: `function maxDepth(s) {
  // Write your solution here
  
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // Expected: 3`,
            python: `def maxDepth(s):
    pass

print(maxDepth("(1+(2*3)+((8)/4))+1")) # Expected: 3`,
            java: `class Solution {
    public int maxDepth(String s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3",
        },
    },
    "destination-city": {
        id: "destination-city",
        title: "Destination City",
        difficulty: "Easy",
        category: "Hash Table • String",
        description: {
            text: "You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.",
            notes: ["It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city."],
        },
        examples: [
            { input: 'paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]', output: '"Sao Paulo"' },
        ],
        constraints: ["1 ≤ paths.length ≤ 100", "paths[i].length == 2", "All cityAi are unique."],
        starterCode: {
            javascript: `function destCity(paths) {
  // Write your solution here
  
}

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])); // Expected: "Sao Paulo"`,
            python: `def destCity(paths):
    pass

print(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])) # Expected: "Sao Paulo"`,
            java: `class Solution {
    public String destCity(List<List<String>> paths) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "Sao Paulo",
            python: "Sao Paulo",
            java: "Sao Paulo",
        },
    },
    "make-the-string-great": {
        id: "make-the-string-great",
        title: "Make The String Great",
        difficulty: "Easy",
        category: "String • Stack",
        description: {
            text: "Given a string s of lower and upper case English letters.",
            notes: [
                "A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:",
                "0 <= i <= s.length - 2",
                "s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.",
                "To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.",
                "Return the string after making it good. The answer is guaranteed to be unique under the given constraints.",
            ],
        },
        examples: [
            { input: 's = "leEeetcode"', output: '"leetcode"' },
        ],
        constraints: ["1 ≤ s.length ≤ 100", "s contains only lower and upper case English letters."],
        starterCode: {
            javascript: `function makeGood(s) {
  // Write your solution here
  
}

console.log(makeGood("leEeetcode")); // Expected: "leetcode"`,
            python: `def makeGood(s):
    pass

print(makeGood("leEeetcode")) # Expected: "leetcode"`,
            java: `class Solution {
    public String makeGood(String s) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "leetcode",
            python: "leetcode",
            java: "leetcode",
        },
    },
    "shuffle-string": {
        id: "shuffle-string",
        title: "Shuffle String",
        difficulty: "Easy",
        category: "Array • String",
        description: {
            text: "You are given a string s and an integer array indices of the same length.",
            notes: ["The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.", "Return the shuffled string."],
        },
        examples: [
            { input: 's = "codeleet", indices = [4,5,6,7,0,2,1,3]', output: '"leetcode"' },
        ],
        constraints: ["s.length == indices.length == n", "1 ≤ n ≤ 100", "s contains only lowercase English letters.", "All values of indices are unique."],
        starterCode: {
            javascript: `function restoreString(s, indices) {
  // Write your solution here
  
}

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); // Expected: "leetcode"`,
            python: `def restoreString(s, indices):
    pass

print(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])) # Expected: "leetcode"`,
            java: `class Solution {
    public String restoreString(String s, int[] indices) {
        return "";
    }
}`,
        },
        expectedOutput: {
            javascript: "leetcode",
            python: "leetcode",
            java: "leetcode",
        },
    },
    "xor-operation-in-an-array": {
        id: "xor-operation-in-an-array",
        title: "XOR Operation in an Array",
        difficulty: "Easy",
        category: "Math • Bit Manipulation",
        description: {
            text: "You are given an integer n and an integer start.",
            notes: ["Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.", "Return the bitwise XOR of all elements of nums."],
        },
        examples: [
            { input: "n = 5, start = 0", output: "8" },
            { input: "n = 4, start = 3", output: "8" },
        ],
        constraints: ["1 ≤ n ≤ 1000", "0 ≤ start ≤ 1000", "n == nums.length"],
        starterCode: {
            javascript: `function xorOperation(n, start) {
  // Write your solution here
  
}

console.log(xorOperation(5, 0)); // Expected: 8
console.log(xorOperation(4, 3)); // Expected: 8`,
            python: `def xorOperation(n, start):
    pass

print(xorOperation(5, 0)) # Expected: 8`,
            java: `class Solution {
    public int xorOperation(int n, int start) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "8\n8",
            python: "8\n8",
            java: "8\n8",
        },
    },
    "split-a-string-in-balanced-strings": {
        id: "split-a-string-in-balanced-strings",
        title: "Split a String in Balanced Strings",
        difficulty: "Easy",
        category: "String • Greedy • Counting",
        description: {
            text: "Balanced strings are those that have an equal quantity of 'L' and 'R' characters.",
            notes: ["Given a balanced string s, split it into some number of substrings such that each substring is balanced.", "Return the maximum number of balanced strings you can obtain."],
        },
        examples: [
            { input: 's = "RLRRLLRLRL"', output: "4" },
        ],
        constraints: ["2 ≤ s.length ≤ 1000", "s[i] is either 'L' or 'R'.", "s is a balanced string."],
        starterCode: {
            javascript: `function balancedStringSplit(s) {
  // Write your solution here
  
}

console.log(balancedStringSplit("RLRRLLRLRL")); // Expected: 4`,
            python: `def balancedStringSplit(s):
    pass

print(balancedStringSplit("RLRRLLRLRL")) # Expected: 4`,
            java: `class Solution {
    public int balancedStringSplit(String s) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4",
        },
    },
    "range-sum-of-bst": {
        id: "range-sum-of-bst",
        title: "Range Sum of BST",
        difficulty: "Easy",
        category: "Tree • Depth-First Search • Binary Search Tree • Binary Tree",
        description: {
            text: "Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].",
            notes: ["For this exercise, the BST is represented as an array."],
        },
        examples: [
            { input: "root = [10,5,15,3,7,null,18], low = 7, high = 15", output: "32" },
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 2 * 10⁴].", "1 ≤ Node.val ≤ 10⁵"],
        starterCode: {
            javascript: `function rangeSumBST(root, low, high) {
  // Write your solution here
  
}

console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15)); // Expected: 32`,
            python: `def rangeSumBST(root, low, high):
    pass

print(rangeSumBST([10, 5, 15, 3, 7, None, 18], 7, 15)) # Expected: 32`,
            java: `class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "32",
            python: "32",
            java: "32",
        },
    },
    "minimum-time-visiting-all-points": {
        id: "minimum-time-visiting-all-points",
        title: "Minimum Time Visiting All Points",
        difficulty: "Easy",
        category: "Array • Math • Geometry",
        description: {
            text: "On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points in the order given by points.",
            notes: [
                "You can move according to these rules:",
                "In 1 second, you can either:",
                "move vertically by one unit,",
                "move horizontally by one unit, or",
                "move diagonally by one unit (in other words, move one unit vertically and one unit horizontally in one second).",
                "You have to visit the points in the same order as they appear in the array.",
                "You are allowed to pass through points that appear later in the order, but these do not count as visits.",
            ],
        },
        examples: [
            { input: "points = [[1,1],[3,4],[-1,0]]", output: "7" },
        ],
        constraints: ["points.length == n", "1 ≤ n ≤ 100", "points[i].length == 2", "-1000 ≤ xi, yi ≤ 1000"],
        starterCode: {
            javascript: `function minTimeToVisitAllPoints(points) {
  // Write your solution here
  
}

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // Expected: 7`,
            python: `def minTimeToVisitAllPoints(points):
    pass

print(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])) # Expected: 7`,
            java: `class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "7",
            python: "7",
            java: "7",
        },
    },
    "decompress-run-length-encoded-list": {
        id: "decompress-run-length-encoded-list",
        title: "Decompress Run-Length Encoded List",
        difficulty: "Easy",
        category: "Array",
        description: {
            text: "We are given a list nums of integers representing a list compressed with run-length encoding.",
            notes: ["Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0). For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.", "Return the decompressed list."],
        },
        examples: [
            { input: "nums = [1,2,3,4]", output: "[2,4,4,4]" },
        ],
        constraints: ["2 ≤ nums.length ≤ 100", "nums.length % 2 == 0", "1 ≤ nums[i] ≤ 100"],
        starterCode: {
            javascript: `function decompressRLElist(nums) {
  // Write your solution here
  
}

console.log(JSON.stringify(decompressRLElist([1,2,3,4]))); // Expected: [2,4,4,4]`,
            python: `import json
def decompressRLElist(nums):
    pass

print(json.dumps(decompressRLElist([1, 2, 3, 4]))) # Expected: [2, 4, 4, 4]`,
            java: `class Solution {
    public int[] decompressRLElist(int[] nums) {
        return nums;
    }
}`,
        },
        expectedOutput: {
            javascript: "[2,4,4,4]",
            python: "[2, 4, 4, 4]",
            java: "[2, 4, 4, 4]",
        },
    },
    "number-of-steps-to-reduce-a-number-to-zero": {
        id: "number-of-steps-to-reduce-a-number-to-zero",
        title: "Number of Steps to Reduce a Number to Zero",
        difficulty: "Easy",
        category: "Math • Bit Manipulation",
        description: {
            text: "Given an integer num, return the number of steps to reduce it to zero.",
            notes: ["In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it."],
        },
        examples: [
            { input: "num = 14", output: "6" },
        ],
        constraints: ["0 ≤ num ≤ 10⁶"],
        starterCode: {
            javascript: `function numberOfSteps(num) {
  // Write your solution here
  
}

console.log(numberOfSteps(14)); // Expected: 6`,
            python: `def numberOfSteps(num):
    pass

print(numberOfSteps(14)) # Expected: 6`,
            java: `class Solution {
    public int numberOfSteps(int num) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "6",
            python: "6",
            java: "6",
        },
    },
    "count-negative-numbers-in-a-sorted-matrix": {
        id: "count-negative-numbers-in-a-sorted-matrix",
        title: "Count Negative Numbers in a Sorted Matrix",
        difficulty: "Easy",
        category: "Array • Binary Search • Matrix",
        description: {
            text: "Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.",
            notes: [],
        },
        examples: [
            { input: "grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]", output: "8" },
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 100", "-100 ≤ grid[i][j] ≤ 100"],
        starterCode: {
            javascript: `function countNegatives(grid) {
  // Write your solution here
  
}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // Expected: 8`,
            python: `def countNegatives(grid):
    pass

print(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])) # Expected: 8`,
            java: `class Solution {
    public int countNegatives(int[][] grid) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "8",
            python: "8",
            java: "8",
        },
    },
    "find-numbers-with-even-number-of-digits": {
        id: "find-numbers-with-even-number-of-digits",
        title: "Find Numbers with Even Number of Digits",
        difficulty: "Easy",
        category: "Array",
        description: {
            text: "Given an array nums of integers, return how many of them contain an even number of digits.",
            notes: [],
        },
        examples: [
            { input: "nums = [12,345,2,6,7896]", output: "2" },
        ],
        constraints: ["1 ≤ nums.length ≤ 500", "1 ≤ nums[i] ≤ 10⁵"],
        starterCode: {
            javascript: `function findNumbers(nums) {
  // Write your solution here
  
}

console.log(findNumbers([12,345,2,6,7896])); // Expected: 2`,
            python: `def findNumbers(nums):
    pass

print(findNumbers([12, 345, 2, 6, 7896])) # Expected: 2`,
            java: `class Solution {
    public int findNumbers(int[] nums) {
        return 0;
    }
}`,
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2",
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