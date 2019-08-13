function showImage()
{
	if(this.files && this.files[0])
		{
			var reader =new FileReader();
			reader.onload=function(data)
			{
				var image = document.getElementById("image");
				image.src =data.target.result;
				image.style.display ="block";
			}
			reader.readAsDataURL(this.files[0]);
		}
}

document.addEventListener('dragover',function(a)
						 {
	a.preventDefault();
	a.stopPropagation();
},false);
