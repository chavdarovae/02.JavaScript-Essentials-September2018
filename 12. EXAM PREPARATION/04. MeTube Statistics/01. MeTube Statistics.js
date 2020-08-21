function solve(array) {
    let index=array.indexOf('stats time');
    let commands=array.slice(0,index);

    let vDB=[];
    for(let command of commands){
        if(command.includes('-')){
            let [vName,vViews]=command.split('-');
            vViews=Number(vViews);

            if(vDB.find(v=>v.name===vName)===undefined){
                let video={name: vName, views: vViews, likes: 0};
                vDB.push(video)
            }else{
                let foundVideo=vDB.find(v=>v.name===vName);
                foundVideo.views+=vViews;
            }            
        }else if(command.includes(':')){
            let [rate,vName]=command.split(':');
            if(vDB.find(v=>v.name===vName)!==undefined){
                let foundVideo=vDB.find(v=>v.name===vName);
                if(rate==='like'){
                    foundVideo.likes++;
                }else if(rate==='dislike'){
                    foundVideo.likes=foundVideo.likes-1;
                }                
            }

        }
    }
    let videoDB=[]
    
    if(array[index+1]==='by views'){
        for(let element of vDB){
            element=Object.values(element);
            videoDB.push(element);                   
        }
        videoDB
            .sort((a,b)=>b[1]-a[1])
            .forEach(x=>console.log(`${x[0]} - ${x[1]} views - ${x[2]} likes`))
    }else if(array[index+1]==='by likes'){
        for(let element of vDB){
            element=Object.values(element);
            videoDB.push(element);                                      
        }
        videoDB
            .sort((a,b)=>b[2]-a[2])
            .forEach(x=>console.log(`${x[0]} - ${x[1]} views - ${x[2]} likes`))
    }
    console.log(vDB);
  
}

solve([ 
    'Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views'
])