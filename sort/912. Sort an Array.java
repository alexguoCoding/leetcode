class Solution {
    public int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;

    }

    public void quickSort(int[] nums, int l, int r) {

        if (l >= r) {
            return;
        }
        int pivot = chooderandom(nums, l, r);

        quickSort(nums, l, pivot - 1);
        quickSort(nums, pivot + 1, r);

    }

    public int findPivot(int[] nums, int l, int r) {

        int key = nums[r];
        int leftsmall = l - 1;

        for (int i = l; i < r; i++) {
            if (nums[i] <= key) {
                leftsmall++;
                swap(nums, leftsmall, i);

            }

        }
        swap(nums, r, leftsmall + 1);
        return leftsmall + 1;

    }

    public int chooderandom(int[] nums, int l, int r) {
        int i = new Random().nextInt(r - l + 1) + l;
        swap(nums, i, r);
        return findPivot(nums, l, r);
    }

    public void swap(int[] nums, int l, int r) {
        int temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;

    }

}