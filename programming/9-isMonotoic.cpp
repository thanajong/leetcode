#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    bool isMonotonic(vector<int> &nums)
    {
        bool isMonotoic = true;
        int stored = 0;
        for (int i = 0; i < nums.size() - 1; i++)
        {
            if (stored == 0)
            {
                if (nums[i + 1] - nums[i] == 1)
                    stored = 1;
                else if (nums[i + 1] - nums[i] == -1)
                    stored = -1;
                else if (nums[i + 1] - nums[i] != 0)
                {
                    isMonotoic = false;
                    break;
                }
            }
            if (stored == 1 || stored == -1)
            {
                if (nums[i + 1] - nums[i] != stored && nums[i + 1] - nums[i] != 0)
                {
                    isMonotoic = false;
                    break;
                }
            }
        }
        return isMonotoic;
    }
};