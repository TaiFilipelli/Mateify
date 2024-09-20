import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ThemeService{
    private theme = 'dark'

    constructor(){
        this.initializeTheme();
    }
    
    toggleTheme():void{
        const htmlElement = document.documentElement;
        if(htmlElement.classList.contains(this.theme)){
            this.setLightTheme();
        }else{
            this.setDarkTheme();
        }
    }
    
    private initializeTheme(): void {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme==='dark'){
            this.setDarkTheme();
        }else{
            this.setLightTheme();
        }
    }
    
    private setDarkTheme():void{
        document.documentElement.classList.add(this.theme);
        localStorage.setItem('theme', 'dark');
    }
    private setLightTheme():void{
        document.documentElement.classList.remove(this.theme);
        localStorage.setItem('theme', 'light');
    }
}