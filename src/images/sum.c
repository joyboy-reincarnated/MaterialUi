#include<stdio.h>

int main(){
    int num,rem,sum=0;
    printf("Enter the 5 digits number");
    scanf("%d",&num);

    for (int i = 0; i < 5; i++)
    {
        rem=num%10;
        num=num/10;
        sum=sum +rem; 
    }
    printf("The sum of 5 digits is %d",sum);
    return 0;
}