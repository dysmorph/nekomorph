function random_imglink(){

							var myimages=new Array()
							//specify random images below. You can have as many as you wish
							myimages[1]="https://dysmorph.nekoweb.org/static/img/bridget2/b1.gif"
							myimages[2]="https://dysmorph.nekoweb.org/static/img/bridget2/b2.gif"
							myimages[3]="https://dysmorph.nekoweb.org/static/img/bridget2/b3.gif"
							myimages[4]="https://dysmorph.nekoweb.org/static/img/bridget2/b4.gif"
							myimages[5]="https://dysmorph.nekoweb.org/static/img/bridget2/b5.gif"
							myimages[6]="https://dysmorph.nekoweb.org/static/img/bridget2/b6.gif"
							myimages[7]="https://dysmorph.nekoweb.org/static/img/bridget2/b7.gif"
							myimages[8]="https://dysmorph.nekoweb.org/static/img/bridget2/b8.gif"
							myimages[9]="https://dysmorph.nekoweb.org/static/img/bridget2/b9.gif"
							myimages[10]="https://dysmorph.nekoweb.org/static/img/bridget2/b10.gif"
							myimages[11]="https://dysmorph.nekoweb.org/static/img/bridget2/b11.gif"
							myimages[12]="https://dysmorph.nekoweb.org/static/img/bridget2/b12.gif"
							myimages[13]="https://dysmorph.nekoweb.org/static/img/bridget2/b13.gif"
							myimages[14]="https://dysmorph.nekoweb.org/static/img/bridget2/b14.gif"
							myimages[15]="https://dysmorph.nekoweb.org/static/img/bridget2/b15.gif"
							myimages[16]="https://dysmorph.nekoweb.org/static/img/bridget2/b16.gif"
							myimages[17]="https://dysmorph.nekoweb.org/static/img/bridget2/b17.gif"
							myimages[18]="https://dysmorph.nekoweb.org/static/img/bridget2/b18.gif"
							myimages[19]="https://dysmorph.nekoweb.org/static/img/bridget2/b19.gif"
							myimages[20]="https://dysmorph.nekoweb.org/static/img/bridget2/b20.gif"
							myimages[21]="https://dysmorph.nekoweb.org/static/img/bridget2/b21.gif"
							myimages[22]="https://dysmorph.nekoweb.org/static/img/bridget2/b22.gif"
							myimages[23]="https://dysmorph.nekoweb.org/static/img/bridget2/b23.gif"
							myimages[24]="https://dysmorph.nekoweb.org/static/img/bridget2/b24.gif"
							myimages[25]="https://dysmorph.nekoweb.org/static/img/bridget2/b25.gif"
							myimages[26]="https://dysmorph.nekoweb.org/static/img/bridget2/b26.gif"
							myimages[27]="https://dysmorph.nekoweb.org/static/img/bridget2/b27.gif"
							myimages[28]="https://dysmorph.nekoweb.org/static/img/bridget2/b28.gif"



							var ry=Math.floor(Math.random()*myimages.length)
							if (ry==0)
							ry=1
							document.write('<img src="'+myimages[ry]+'" border=0>')
							}
							random_imglink()
