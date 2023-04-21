var BikeCustomerDetails=[
    {
        "cusId":1,
        "cusName":"arun",
        "cusEmail":"arun124@gmail.com",
        "cusBillno":"23V56556IO",
        "cusContact":9942335841,
        "cusAddress":"12,34-1,Agaram,salem-637303",
        "cusDateofpurchase":"2021-21-12"
    },
    {
        "cusId":2,
        "cusName":"vijay",
        "cusEmail":"vijay124@gmail.com",
        "cusBillno":"24V56556IO",
        "cusContact":987635841,
        "cusAddress":"92-1 karuppur,salem-637303",
        "cusDateofpurchase":"2021-11-02"
    }
    
    
]

export const create=(data)=>
{
BikeCustomerDetails.push(data);
}


export const list=()=>
{
    return BikeCustomerDetails;
}


export const read=(index)=>
{
    return BikeCustomerDetails[index];
}


export const remove=(index)=>
{
    BikeCustomerDetails=BikeCustomerDetails.filter((data,ind)=>
    {
        return ind!==index;
    })
    return BikeCustomerDetails;
}

export const FetchExact=(name)=>
{
    const temp=BikeCustomerDetails.filter((element)=>
    {
        return element.cusName===name;
    })
    return temp[0];

}

export const alter=(data,pos)=>
{
    BikeCustomerDetails[pos]=data;

}