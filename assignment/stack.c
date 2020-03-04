#include<stdio.h>
#include<stdlib.h>
#define wrong 0
#define ok 1
typedef struct {
    int index;//当前栈顶元素在栈中的位置
    int* pointer;//指向栈的指针
    int size;//栈的大小
}stack;
//初始化栈:
void init_stack(stack* stack1){
    stack1->index = 0;
    stack1->pointer = (int*)malloc(10 * sizeof(int));
    stack1->size = 10;
}
//压栈:
int push(stack* stack1, int elem){
    if(stack1->index==stack1->size){
        printf("栈满，可能会有危险,即将为你添加元素");
        //当然这里应该存在问题，如果栈满，而后面内存又有其他用处，应该不能占用，否则会引起错误
        stack1->pointer = (int*)realloc(stack1->pointer,(stack1->size+1)*sizeof(int));
        if(!stack1->pointer) {
            return wrong;
        }
        stack1->size = stack1->size + 1;
    }
    stack1->pointer[stack1->index++] = elem;
    return ok;
}
//pop感觉一般返回元素值比较好，但是由于要分开不能pop的情况故传入指针．
int pop(stack* stack1, int* elem){
    if(stack1->index == 0) {
        return wrong;
    }
    *elem = stack1->pointer[--stack1->index];
    return ok;
}
//打印栈底到栈顶打印栈:
void stack_print_bottom_to_top(stack* stack1){
    printf("\n从栈底打印到栈顶:");
    for(int i = 0;i < stack1->index;i++){
        printf("%d\t",stack1->pointer[i]);
    }
}
//栈顶到栈底打印栈:
void stack_print_top_to_bottom(stack* stack1){
    printf("\n从栈顶打印到栈底:");
    for( int i= stack1->index-1; i>=0; i--){
        printf("%d\t",stack1->pointer[i]);
    }
    printf("\n");
}
void main(){
    stack* stack1 ;
    int receiver ;
    int flag;
    init_stack(stack1);
    for(int i = 0; i < stack1->size; i++) {
        int flag = push(stack1, 2*i);
    }
    flag = push(stack1, 77);
    stack_print_top_to_bottom(stack1);
    flag = pop(stack1,&receiver);
    printf("pop出的值是%d\n",receiver);
    stack_print_bottom_to_top(stack1);
}