//1.BubbleSort
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
//1.冒泡
void bubble_sort(int * arr, int length ){
    for (int i = 0; i < length - 1; i++ ){
        for ( int j = 0; j < length - i -1; j++){
            if (arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
//未经改进的冒泡排序，时间复杂度T(n) = O(n^2);
//如果添加标志flag检测在一趟中是否有交换数组中的两个元素，在已经正确排序之后就可以减少操作．
//改进之后的冒泡排序，时间复杂度最好情况下为O(n);
void bubble_sort_improve (int* arr, int length){
    for (int i = 0; i < length - 1; i++) {
        int flag = 0;
        for (int j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag == 0)
            return ;
        else
            flag = 0;
    }
}
//2.选择,T(n)=O(n^2)
void select_sort(int* arr, int length){
    int temp;
    for (int i = 0; i < length - 1; i++){
        int index = i;
        for (int j = i + 1; j < length - 1; j++){
            if (arr[index] < arr[j]) index = j;
        }
        if(index != i){
           temp = arr[index];
           arr[index] = arr[i];
           arr[i] = temp;
       }

    }
}
//3.插入,直接插入,平均时间复杂度O(n^2),最好情况下是O(n)
//核心：插入之后的排序处理
void insert (int* arr, int index){
    int i;
    for (i = index; i>0 && arr[i-1]>arr[index]; i--){
        arr[i] = arr[i-1];
    }
    arr[i] = arr[index];
}
//对原数组从第二个元素开始依次插入排序
void insert_sort(int * arr, int length){
    for (int i = 1; i < length; i++ ){
        insert(arr,i);
    }
}
//4.归并，时间复杂度O(n*log(n));－借鉴:掘金
//归并核心是分治，因此单独写分治的操作.
void merge(int *arr, int left, int middle,int right){
    //这里选择重新分配两个数组的空间，因为这一步处理无法在原数组上操作，所以也就同时加大了
    //算法的空间复杂度．
    int* arr1 = (int*)malloc((middle-left + 1)*sizeof(int));
    int* arr2 = (int*)malloc((right - middle)*sizeof(int));
    //以上不大合理,因为每次都重新开辟了内存空间，这个过程应该是耗时也耗空间的,写完这个等下试下直接开辟与原数组长度相等的新数组
    for (int i = 0;i < middle - left + 1; i++ ){
        arr1[i] = arr[left + i ];
    }
    for (int i = 0;i < right - middle; i++ ){
        arr2[i] = arr[middle + i + 1];
    }
    int now = left;
    int i = 0 ,j = 0;
    while ( i < middle - left + 1 && j < right - middle){
        if ( arr1[i] < arr2[j]){
            arr[now] = arr1[i];
            i++;
            now++;
        }
        else{
            arr[now] = arr2[j];
            j++;
            now++;
        }
    }
    while( i < middle - left + 1){
        arr[now] = arr1[i];
        i++;
        now++;
    }
    while( j < right - middle ){
        arr[now] = arr2[j];
        j++;
        now++;
    }
}
void merge_sort(int* arr,int left,int right){
    if (left==right) return ;
    else {
        int middle = (left + right) / 2;
        merge_sort(arr , left , middle);
        merge_sort(arr , middle + 1,right);
        merge(arr,left,middle,right);
    }
};
//归并2改进，较1的方式有了改善，可是整体效果还是不乐观,我猜想是测试时基数少了
void merge2(int* arr, int left, int middle, int right, int* temp_arr){
    int i = left;
    int j = middle + 1;
    int now = left;
    while (i <= middle && j <= right ){
        if (arr[i] <= arr[j]){
            temp_arr[now++] = arr[i++];
        }
        else {
            temp_arr[now++] = arr[j++];
        }
    }
    while (i <= middle){
        temp_arr[now++] = arr[i++];
    }
    while (j <= right){
        temp_arr[now++] = arr[j++];
    }
    for(int i = left; i <= right; i++){
        arr[i] = temp_arr[i];
        i++;
    }
}
//
void merge_sort2(int* arr, int left, int right, int* temp_arr){
        if (left==right) return ;
        else {
            int middle = (left + right) / 2;
            merge_sort2(arr , left , middle, temp_arr);
            merge_sort2(arr , middle + 1, right, temp_arr);
            merge2(arr,left,middle,right,temp_arr);
        }
    };
//堆排序　参考掘金https://juejin.im/entry/5a1b93ec6fb9a044fc4474cf
//时间花费主要不在初始化堆，而在于排序重建堆的过程,循环中的重建最大堆的过程比较次数之和应为
// log2+log3+...+log(n-1)约为log(n!),经查阅验证与nlog(n)同阶
// 时间复杂度O(nlog(n))
//检查并保持最大堆性质
void maxHeapify(int* arr, index, size){
    int max = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    if ( left < size && arr[index] < arr[left]){
        max = left;
    }
    if ( right < size && arr[max] < arr[right]){
        max = right;
    }
    if ( max != index){
        int temp = arr[max];
        arr[max] = arr[index];
        arr[index] = temp;
        maxHeapify(arr,max,size);
    }
}
//创建最大堆
void build_max_heap (int arr,size){
    int parent = (size-1)/2;
    for(int i = parent; i >= 0; i--){
        maxHeapify(arr, i , size);
    }
}
void heap_sort(int* arr, size){
    build_max_heap(arr, size);
    for( int i = size -1; i > 0; i--){
        int temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        maxHeapify(arr,0,i);
    }
}

