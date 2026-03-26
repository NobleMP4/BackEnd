import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'CleSecreteJWTPoliceAcademyVision', // DOIT ETRE LA MEME
    });
  }

  async validate(payload: any) {
    // On injecte tout dans req.user
    return { 
      userId: payload.sub, 
      email: payload.email,
      firstName: payload.firstName, 
      lastName: payload.lastName, 
      rank: payload.rank 
    };
  }
}