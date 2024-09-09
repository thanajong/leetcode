#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        bool increasing=true, decreasing=true;
        for (int i = 0; i < nums.size()-1; i++)
        {
            if(nums[i+1]>nums[i]) decreasing=false;
            else if(nums[i+1]<nums[i]) increasing=false;
        }
        return increasing||decreasing;
    }
};
// int main() {
//     Solution sol;
//     vector<int> test={2,1};
//     bool result = sol.isMonotonic(test);
//     cout<<result;
// }