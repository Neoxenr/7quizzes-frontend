export type GetRoomsDto = {
  roomId: string;
  roomName: string;
  ownerId: string;
};

export type GetRoomDto = {
  roomId: string;
  roomName: string;
  ownerId: string;
  players: [{ playerId: string }];
};

export type CreateRoomDto = {
  roomName: string;
};
