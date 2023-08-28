class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1=sorted(nums1)
        tempsort=[]
        for i in range(len(nums1)):
            tempsort.append([nums2[i],i])
        tempsort=sorted(tempsort, key=lambda x: x[0])
        result=[-1]*len(nums1)
        l=0
        r=len(nums1)-1
        for i in range(len(nums1)):
            if nums1[i]>tempsort[l][0]:
                result[tempsort[l][1]]=nums1[i]
                l=l+1
            else:
                result[tempsort[r][1]]=nums1[i]
                r=r-1

        #print(nums1)
        #print(tempsort)
        return result