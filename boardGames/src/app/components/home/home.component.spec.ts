import { HomeComponent } from'./home.component';
import { GameService } from '../games/game.survice';
import { AuthService } from '../../authentication/auth.service';
import { of } from 'rxjs'; 
import { HttpClient } from 'selenium-webdriver/http';

describe('HomeComponent', () => {
    it('should return false', () => {
        const home = new HomeComponent(null, null);
        expect(home.noRaiting).toBe(false);
    });

    it('should return true', () => {
        let home = new HomeComponent(null, null);
        home['noRaiting'] = true;
        expect(home.noRaiting).toBe(true);
    });
  
  
  });

  
