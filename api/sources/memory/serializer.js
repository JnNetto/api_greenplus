
const _serializeObjectToJson = (user) => {
    return {
        id: user.getId(),
        token: user.getToken(),
        name: user.getName(),
        cpf: user.getCpf(),
        email: user.getEmail(),
        password: user.getPassword(),
        apartaments: user.getApartaments().map(apartament => {
            return {
                number: apartament.getNumber(),
                block: apartament.getBlock(),
                bondType: apartament.getBondType(),
                condominiumCode: apartament.getCondominiumCode(),
                condominiumName: apartament.getCondominiumName(),
                residents: apartament.getResidents().map(resident => {
                    return {
                        name: resident.getName(),
                        email: resident.getEmail(),
                    }
                }),
            }}
        ),
        modalities: user.getModalities().map(modality => {
            return {
                name: modality.getName(),
                description: modality.getDescription(),
                condominiumCode: modality.getCondominiumCode(),
                condominiumName: modality.getCondominiumName(),
                apartamentNumber: modality.getApartamentNumber(),
                apartamentBlock: modality.getApartamentBlock(),
            }
        }
        ),
    }
}

const _serializeJson = (user) => {
    return {
        id: user.id,
        token: user.token,
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        password: user.password,
        apartaments: user.apartaments.map(apartament => {
            return {
                number: apartament.number,
                block: apartament.block,
                bondType: apartament.bondType,
                condominiumCode: apartament.condominiumCode,
                condominiumName: apartament.condominiumName,
                residents: apartament.residents.map(resident => {
                    return {
                        name: resident.name,
                        email: resident.email,
                    }
                }),
            }}
        ),
        modalities: user.modalities.map(modality => {
            return {
                name: modality.name,
                description: modality.description,
                condominiumCode: modality.condominiumCode,
                condominiumName: modality.condominiumName,
                apartamentNumber: modality.apartamentNumber,
                apartamentBlock: modality.apartamentBlock,
            }
        }
        ),
    }
}

const fromObject = (data) => {
    if (!data) {
        return null;
    }

    if (Array.isArray(data)) {
        return data.map(_serializeObjectToJson);
    }

    return _serializeObjectToJson(data);
}

const fromJson = (data) => {
    if (!data) {
        return null;
    }

    if (Array.isArray(data)) {
        return data.map(_serializeJson);
    }

    return _serializeJson(data);
}

module.exports = {
    fromObject,
    fromJson
};

