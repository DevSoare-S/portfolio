import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  temperature: number | null = null;
  weatherIconUrl: string = '';
  weatherDescription = '';
  city: string = 'Canela';
  cityInput: string = '';
  showInput: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.temperature = Math.round(data.main.temp);
        this.weatherDescription = data.weather[0].description;
        this.weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      },
      error: (error) => {
        console.error('Erro ao obter o clima:', error);
      }
    });
  }

  toggleCityInput() {
    this.showInput = !this.showInput;
  }

  confirmCity() {
    if (this.cityInput.trim()) {
      this.city = this.cityInput.trim();
      this.cityInput = '';
      this.showInput = false;
      this.getWeather();
    }
  }

}
