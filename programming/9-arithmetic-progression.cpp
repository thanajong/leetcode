#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) { 
        sort(arr.begin(), arr.end());
        int stored = arr[1] - arr[0];
        for (int i = 0; i < arr.size()-1; i++) if(arr[i+1] - arr[i] != stored) return false;
        return true;
    }
};
int main() {
    Solution sol;
    vector<int> arr={3,1,5};
    sort(arr.begin(), arr.end());
    int stored = arr[1] - arr[0];
    for (int i = 0; i < arr.size(); i++) if(arr[i+1] - arr[i] != stored) return false;
    return true;
    //for (int num:arr) cout<<num<<" ";
}