export const photos = Array.from({length:20},()=> 
    (
        {
            'src': 'https://source.unsplash.com/collection/256460?'+ Math.ceil(Math.random()*200),
            'width': Math.floor(Math.random()*4) + 2,
            'height': Math.floor(Math.random()*4) + 2
        }
    )
) 
