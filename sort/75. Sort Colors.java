class Solution {
    public int[] sortColors(int[] nums) {
        int length=nums.length;
        if(length<2){
            return nums;
        }
        else{
            int mid=length/2;
            int [] a=Arrays.copyOfRange(nums, 0, mid);
            int [] b=Arrays.copyOfRange(nums, mid,length);
            a=sortColors(a);
            b=sortColors(b);
            int[] res=merge(a,b);
            for(int i=0;i<res.length;i++){
                nums[i]=res[i];
            }
            return merge(a,b);

        }



    }

    public int[] merge(int[] a,int[] b) {
        int[] result=new int[a.length+b.length];
        int i=0;
        int j=0;
        int k=0;
        while(i!=a.length&&j!=b.length){
            if(a[i]>b[j]){
                result[k]=b[j];
                j++;
            }
            else {
                result[k]=a[i];
                i++;
            }
            k++;

        }
        while(i!=a.length){
            System.out.println(result.length);
            System.out.println(k);
   
                result[k]=a[i];
                i++;

            k++;

        }
        while(j!=b.length){


                result[k]=b[j];
                j++;

            k++;

        }

 
        return result;

    }
}